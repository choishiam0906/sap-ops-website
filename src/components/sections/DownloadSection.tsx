"use client";

import { useState } from "react";
import { Download, ExternalLink, Monitor, Terminal, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { APP, PLATFORM_DOWNLOADS } from "@/lib/constants";

const platformIcons: Record<string, LucideIcon> = {
  Monitor,
  Apple: Monitor,
  Terminal,
};

export function DownloadSection() {
  const [platform, setPlatform] = useState("windows");
  const current = PLATFORM_DOWNLOADS[platform];
  const PlatformIcon = platformIcons[current.icon] || Monitor;

  return (
    <section id="download" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>지금 시작하세요</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            플랫폼을 선택하고 바로 다운로드하세요.
          </p>
        </AnimateInView>

        {/* 플랫폼 선택 */}
        <AnimateInView>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex gap-1 rounded-xl bg-bg-secondary/50 p-1">
              {Object.entries(PLATFORM_DOWNLOADS).map(([key, pl]) => {
                const Icon = platformIcons[pl.icon] || Monitor;
                return (
                  <button
                    key={key}
                    onClick={() => setPlatform(key)}
                    className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-all ${
                      platform === key
                        ? "bg-sap-bright text-white"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <Icon size={16} />
                    {pl.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 다운로드 옵션 */}
          {current.available && current.options ? (
            <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
              {current.options.map((opt) => (
                <div
                  key={opt.label}
                  className={`glass-subtle relative rounded-2xl p-6 text-center ${opt.recommended ? "border-sap-bright/40 shadow-lg shadow-sap-bright/5" : ""}`}
                >
                  {opt.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sap-bright px-3 py-1 text-xs font-medium text-white shadow-lg shadow-sap-bright/25">
                      추천
                    </div>
                  )}
                  <Download size={32} className="mx-auto mb-4 text-sap-sky" />
                  <h3 className="mb-2 text-xl font-semibold text-text-primary">{opt.label}</h3>
                  <p className="mb-2 text-sm text-text-secondary">{opt.description}</p>
                  <p className="mb-4 text-xs text-text-muted">{opt.size}</p>
                  <a
                    href={opt.href}
                    download
                    className="inline-flex items-center gap-2 rounded-xl bg-sap-bright px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-sap-bright/90 hover:shadow-lg hover:shadow-sap-bright/25"
                  >
                    <Download size={14} />
                    다운로드
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-md rounded-2xl border border-border-glass bg-bg-secondary/20 px-8 py-12 text-center">
              <Clock size={40} className="mx-auto mb-4 text-text-muted" />
              <p className="mb-2 text-lg font-medium text-text-primary">곧 지원 예정이에요</p>
              <p className="text-sm text-text-secondary">{current.comingSoonMessage}</p>
            </div>
          )}

          {/* 시스템 요구사항 + GitHub */}
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-text-secondary">
              시스템 요구사항: <span className="text-text-primary">Windows 10+</span> · <span className="text-text-muted">x64</span>
            </p>
            <a
              href={`${APP.github}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-sap-sky"
            >
              <ExternalLink size={14} />
              GitHub Releases에서 모든 버전 보기
            </a>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
