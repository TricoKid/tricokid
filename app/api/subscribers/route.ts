import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

    if (!API_KEY || !CHANNEL_ID) {
      return NextResponse.json({
        error: "Missing environment variables",
      });
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({
        error: "Channel not found",
        data,
      });
    }

    const subscribers = data.items[0].statistics.subscriberCount;

    return NextResponse.json({
      subscribers,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch subscribers",
    });
  }
}