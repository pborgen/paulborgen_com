import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Paul Borgen
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <main className="container max-w-3xl py-10 md:py-16">
        <article className="space-y-4 leading-relaxed">{children}</article>
      </main>
      <footer className="border-t py-6">
        <div className="container text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Paul Borgen
          </Link>
        </div>
      </footer>
    </div>
  );
}
