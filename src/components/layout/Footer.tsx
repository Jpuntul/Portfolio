import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[#0c1428] bg-[#04070f]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-mono text-sm font-bold text-[#dce8ff]">
            JP
            <span className="text-accent-600"> · </span>
            2026
          </p>
          <p className="text-sm text-[#1e2e48]">
            Built with React 19 + TypeScript + Vite 6 + Tailwind v4.{" "}
            <a
              href="https://github.com/Jpuntul/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2a3d60] underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
            >
              View source →
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center border border-[#0c1428] text-[#1e2e48] transition-colors hover:border-accent-600 hover:text-accent-600"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center border border-[#0c1428] text-[#1e2e48] transition-colors hover:border-accent-600 hover:text-accent-600"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center border border-[#0c1428] text-[#1e2e48] transition-colors hover:border-accent-600 hover:text-accent-600"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
