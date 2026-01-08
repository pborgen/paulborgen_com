import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Borgen | Software Engineer",
  description:
    "Personal portfolio website of Paul Borgen, a software engineer specializing in Big Data, Blockchain, and much more.",
  generator: "Paul Borgen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/artificial-intelligence.ico"
          sizes="16x16 32x32 64x64"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16 32x32 64x64"
          href="/artificial-intelligence.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
