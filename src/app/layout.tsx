import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Appoint me",
  description: "Automated next generation appointment booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="h-full"
      >
        {children}
      </body>
    </html>
  );
}
