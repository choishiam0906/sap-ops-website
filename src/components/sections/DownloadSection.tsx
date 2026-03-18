"use client";

import { Download, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView, StaggerContainer, StaggerItem } from "@/components/ui/AnimateInView";
import { APP, DOWNLOAD_LINKS } from "@/lib/constants";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>지금 시작하세요</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            설치 없이 바로 실행하거나, Windows에 설치할 수 있어요.
          </p>
        </AnimateInView>

        <StaggerContainer className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
          {Object.values(DOWNLOAD_LINKS).map((dl) => (
            <StaggerItem key={dl.label}>
              <GlassCard hover={false} className={`relative text-center ${dl.recommended ? "border-sap-bright/40" : ""}`}>
                {dl.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sap-bright px-3 py-1 text-xs font-medium text-white">
                    추천
                  </div>
                )}
                <Download size={32} className="mx-auto mb-4 text-sap-sky" />
                <h3 className="mb-2 text-xl font-semibold text-text-primary">{dl.label}</h3>
                <p className="mb-3 text-sm text-text-secondary">{dl.description}</p>
                <p className="text-xs text-text-muted">{dl.size}</p>
                <a
                  href={dl.href}
                  download
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sap-bright px-6 py-3 text-sm font-medium text-white transition-all hover:bg-sap-bright/90 hover:shadow-lg hover:shadow-sap-bright/25"
                >
                  <Download size={14} />
                  다운로드
                </a>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Requirements */}
        <AnimateInView className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-border-glass px-6 py-4">
            <p className="text-sm text-text-secondary">
              요구사항: <span className="text-text-primary">Windows 10+</span>
            </p>
            <a
              href={APP.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-sap-sky"
            >
              <ExternalLink size={12} />
              {APP.github.replace("https://", "")}
            </a>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
