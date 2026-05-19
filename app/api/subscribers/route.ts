import { NextResponse } from "next/server";

const API_KEY = "AIzaSyAzzeU2_nDimATFGqFkTFq_zrs0omKSyBI";
const CHANNEL_ID = "UCMqD-FNgfhncfWibGB6czHA";

export async function GET() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );

    const data = await response.json();

    return NextResponse.json({
      subscribers: data.items?.[0]?.statistics?.subscriberCount || "0",
    });
  } catch (error) {
    return NextResponse.json({
      subscribers: "0",
    });
  }
}