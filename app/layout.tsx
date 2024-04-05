/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " DEV⚡BEN",
  description:
    "Front-end developer 💡 building the future of the web 🌐 one pixel at a time 🖥️.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
       
      </head>
      <body
        className={`${inter.className} bg-black`}
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
