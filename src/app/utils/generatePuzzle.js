import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

export async function generateLateralThinkingPuzzle() {
  const prompt = `Create a lateral thinking puzzle in this format:
  Scenario: [Scenario description]
  Hint: [Hint for solving it]
  Answer: [Answer to the scenario]
  Generate one now.`;

  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "This story begins",
    max_tokens: 30,
  });
  console.log("Full Response",response);

  // Accessing choices directly from the root response object
  if (!response.choices || response.choices.length === 0) {
    throw new Error("Invalid API response format: No choices returned");
  }

  return response.choices[0].text.trim();
}
