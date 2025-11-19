import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // put your OpenAI key here
});

export async function explainError(errorMessage: string): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful coding assistant." },
        { role: "user", content: `Explain this error and suggest possible fixes: ${errorMessage}` }
      ]
    });

    return response.choices[0].message?.content || "No explanation found.";
  } catch (err) {
    console.error(err);
    return "Failed to fetch explanation from AI.";
  }
}
