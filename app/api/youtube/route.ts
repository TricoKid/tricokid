import { NextResponse } from "next/server";

const API_KEY = "AIzaSyAzzeU2_nDimATFGqFkTFq_zrs0omKSyBI";
const CHANNEL_ID = "UCMqD-FNgfhncfWibGB6czHA";

export async function GET() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch YouTube videos",
    });
  }
}