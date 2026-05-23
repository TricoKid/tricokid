import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function GET() {
  try {

    const completion =
      await client.chat.completions.create({

     model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: `
Generate a viral battle question.

Return ONLY valid JSON.

Example:
{
  "heading": "WHO IS MORE POPULAR?",
  "optionA": "Naruto",
  "optionB": "Gojo",
  "answer": "Naruto"
}
`,
          },
        ],

      });

    const text =
      completion.choices[0].message.content || "";

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(cleaned);

    return NextResponse.json(data);

  } catch (error: any) {

    return NextResponse.json({
      error: error.message,
    });

  }
}