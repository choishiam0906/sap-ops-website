"use client";

import { ShieldCheck, BookOpen, Shuffle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView, StaggerContainer, StaggerItem } from "@/components/ui/AnimateInView";
import { SECURITY_MODES } from "@/lib/constants";

const securityIcons: Record<string, LucideIcon> = {
  ShieldCheck,
  BookOpen,
  Shuffle,
};

export function SecuritySection() {
  return (
    <section id="security" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>3가지 보안 모드</GradientText>로 데이터를 보호해요
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            환경과 요구사항에 맞는 보안 수준을 선택할 수 있어요.
            기밀 데이터는 항상 로컬에 안전하게 보관돼요.
          </p>
        </AnimateInView>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {SECURITY_MODES.map((mode) => {
            const Icon = securityIcons[mode.icon];
            return (
              <StaggerItem key={mode.id}>
                <div className={`glass-subtle relative h-full rounded-2xl p-6 text-center ${mode.recommended ? "border-sap-bright/40 shadow-lg shadow-sap-bright/5" : ""}`}>
                  {mode.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sap-bright px-3 py-1 text-xs font-medium text-white shadow-lg shadow-sap-bright/25">
                      추천
                    </div>
                  )}
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sap-bright/10">
                    {Icon && <Icon size={28} className="text-sap-sky" />}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-text-primary">{mode.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">{mode.description}</p>
                  <div className="rounded-lg bg-bg-primary/40 px-4 py-3">
                    <p className="mb-1 text-xs font-medium text-text-muted">데이터 흐름</p>
                    <p className="text-xs text-sap-sky font-mono">{mode.flow}</p>
                  </div>
                  <p className="mt-4 text-xs text-text-muted">{mode.useCase}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
