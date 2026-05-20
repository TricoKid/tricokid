import { NextResponse } from "next/server";

const API_KEY = "AIzaSyAzzeU2_nDimATFGqFkTfq_zrs0omKSyBI";
const CHANNEL_ID = "UCMqD-FNgfhncfWibGB6czHA";

export async function GET() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
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
      subscribers: "0",
    });
  }
}