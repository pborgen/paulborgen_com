"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { type: "prompt", text: "$ claude" },
  { type: "output", text: "" },
  { type: "box", text: "╭─── Claude Code v2.0.76 ─────────────────────────────────────────────────╮" },
  { type: "box", text: "│                                                                         │" },
  { type: "box-highlight", text: "│                    Welcome back Paul!                                   │" },
  { type: "box", text: "│                                                                         │" },
  { type: "box-logo", text: "│                          * ▐▛███▜▌ *                                    │" },
  { type: "box-logo", text: "│                         * ▝▜█████▛▘ *                                   │" },
  { type: "box-logo", text: "│                          *  ▘▘ ▝▝  *                                    │" },
  { type: "box", text: "│                                                                         │" },
  { type: "box-info", text: "│        Opus 4.5 · Claude Max · paulborgen.com                          │" },
  { type: "box", text: "│              ~/dev/code/pborgen/paulborgen_com                          │" },
  { type: "box", text: "╰─────────────────────────────────────────────────────────────────────────╯" },
  { type: "output", text: "" },
  { type: "prompt", text: "> Add a terminal animation to my portfolio" },
  { type: "output", text: "" },
  { type: "claude", text: "I'll create a terminal animation component that showcases" },
  { type: "claude", text: "Claude Code in action on your portfolio site." },
  { type: "output", text: "" },
  { type: "action", text: "● Creating components/terminal-animation.tsx" },
  { type: "action", text: "● Updating app/page.tsx" },
  { type: "output", text: "" },
  { type: "success", text: "✓ Terminal animation added successfully!" },
];

export function TerminalAnimation() {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalLines>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      // Reset animation after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
      }, 4000);
      return () => clearTimeout(resetTimeout);
    }

    const currentLine = terminalLines[currentLineIndex];

    if (currentCharIndex < currentLine.text.length) {
      // Type character by character for prompts
      const typingSpeed = currentLine.type === "prompt" ? 50 : 20;
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next line
      const lineDelay = currentLine.type === "output" && currentLine.text === "" ? 200 : 400;
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  const getLineStyle = (type: string) => {
    switch (type) {
      case "prompt":
        return "text-green-400";
      case "claude":
        return "text-orange-400";
      case "action":
        return "text-blue-400";
      case "success":
        return "text-emerald-400";
      case "box":
        return "text-gray-500";
      case "box-highlight":
        return "text-white font-semibold";
      case "box-logo":
        return "text-orange-400";
      case "box-info":
        return "text-cyan-400";
      default:
        return "text-gray-300";
    }
  };

  const currentLine = terminalLines[currentLineIndex];
  const partialText = currentLine?.text.slice(0, currentCharIndex) || "";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-lg overflow-hidden border border-border shadow-2xl">
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-sm text-gray-400">claude-code — zsh</span>
        </div>
        {/* Terminal body */}
        <div className="bg-gray-900 p-4 font-mono text-sm min-h-[300px]">
          {displayedLines.map((line, index) => (
            <div key={index} className={`${getLineStyle(line.type)} whitespace-pre`}>
              {line.text || "\u00A0"}
            </div>
          ))}
          {currentLineIndex < terminalLines.length && (
            <div className={`${getLineStyle(currentLine?.type || "output")} whitespace-pre`}>
              {partialText}
              <span className="animate-pulse">▋</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
