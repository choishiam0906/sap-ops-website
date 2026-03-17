import Image from "next/image";
import { APP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-glass py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <Image src="/icon.svg" alt={APP.shortName} width={24} height={24} />
          <span className="text-sm font-medium text-text-primary">
            {APP.shortName} <span className="text-text-muted">v{APP.version}</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a
            href={APP.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text-secondary"
          >
            GitHub
          </a>
          <span>MIT License</span>
        </div>

        {/* Built with */}
        <p className="text-xs text-text-muted">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
