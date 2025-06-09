import { streamText } from "ai"
import { google } from "@ai-sdk/google"

export const maxDuration = 30

export async function POST(req: Request) {
  const { message } = await req.json()

  // Try multiple possible environment variable names
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY

  if (!apiKey) {
    console.error("No Gemini API key found. Checked:", {
      GOOGLE_GENERATIVE_AI_API_KEY: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      GOOGLE_API_KEY: !!process.env.GOOGLE_API_KEY,
      GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
    })
    return Response.json(
      {
        error: "API key not configured. Please add GOOGLE_GENERATIVE_AI_API_KEY to your .env.local file.",
      },
      { status: 500 },
    )
  }

  try {
    const result = streamText({
      model: google("gemini-1.5-flash"),
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for AutoHub, a car selling platform in Pakistan. You help users with car buying/selling advice, market prices, technical specifications, and maintenance guidance. Be helpful and knowledgeable about the Pakistani car market.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Gemini API Error:", error)
    return Response.json(
      {
        error: `AI service error: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}
