import { generateLateralThinkingPuzzle } from "../../utils/generatePuzzle";

export async function GET(req) {
  try {
    const puzzle = await generateLateralThinkingPuzzle();
    return new Response(JSON.stringify({ puzzle }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating puzzle:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate puzzle" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
