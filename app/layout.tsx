import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}