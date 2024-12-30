import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function POST(req) {
  try {
    const { scenario, question } = await req.json();

    const prompt = `You are a helpful assistant answering yes/no questions about a mystery scenario. Your task is to evaluate whether the question is directly or indirectly relevant to solving the mystery described in the scenario.
    Rules for answering:
    1. If the question logically relates to solving the mystery or understanding the events, answer "Yes" or "No" based on the scenario.
    2. If the question has no logical connection to solving the mystery or understanding the events, answer "Irrelevant Question."
    3. Always base your answers on the given scenario and avoid making assumptions beyond what is provided.

    Scenario: ${scenario}

    Question: ${question}

    Answer only "Yes", "No", or "Irrelevant Question"`;

    

    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
    });

    if (!response.choices || response.choices.length === 0) {
        throw new Error("Invalid API response format: No choices returned");
      }
    const aiResponse = response.choices[0].text.trim();
    return new Response(JSON.stringify({ answer: aiResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in AI response:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process the request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
