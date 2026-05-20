import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({
        error: "Missing API key",
      });
    }

    // FIND CHANNEL BY HANDLE
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=tricokidhere&key=${API_KEY}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const searchData = await searchResponse.json();

    const channelId = searchData.items?.[0]?.snippet?.channelId;

    if (!channelId) {
      return NextResponse.json({
        error: "Channel not found",
      });
    }

    // FETCH SUBSCRIBER COUNT
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await response.json();

    const subscribers =
      data.items?.[0]?.statistics?.subscriberCount || "0";

    return NextResponse.json({
      subscribers,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch subscribers",
    });
  }
}