import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.YOUTUBE_API_KEY;

    // FIND CHANNEL USING HANDLE
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=tricokidhere&key=${API_KEY}`
    );

    const searchData = await searchResponse.json();

    const channelId = searchData.items?.[0]?.snippet?.channelId;

    if (!channelId) {
      return NextResponse.json({
        error: "Channel not found",
      });
    }

    // GET LATEST VIDEO
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch videos",
    });
  }
}