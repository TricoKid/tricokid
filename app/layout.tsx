import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TricoKid | TricoVerse",

  description:
    "Official website of TricoKid featuring YouTube videos, Kerala creator content, anime entertainment, quizzes, and interactive experiences.",

  keywords: [
    "TricoKid",
    "TricoVerse",
    "Kerala YouTuber",
    "Malayalam YouTube",
    "Anime Malayalam",
    "Kerala creator",
    "Malayalam quizzes",
    "YouTube creator website",
    "Indian YouTuber",
  ],

  authors: [{ name: "TricoKid" }],

  creator: "TricoKid",

  openGraph: {
    title: "TricoKid | TricoVerse",

    description:
      "Official TricoKid website with videos, anime content, quizzes and creator community.",

    url: "https://tricokid.vercel.app",

    siteName: "TricoVerse",

    images: [
      {
        url: "https://tricokid.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "TricoKid TricoVerse",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "TricoKid | TricoVerse",

    description:
      "Official TricoKid website with videos, anime content and creator interactions.",

    images: ["https://tricokid.vercel.app/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}