"use client";

import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView, StaggerContainer, StaggerItem } from "@/components/ui/AnimateInView";
import { TECH_STACK } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Runtime: "bg-sap-sky/5 border-sap-sky/10",
  Frontend: "bg-sap-bright/5 border-sap-bright/10",
  State: "bg-purple-500/5 border-purple-500/10",
  Database: "bg-emerald-500/5 border-emerald-500/10",
  Build: "bg-amber-500/5 border-amber-500/10",
  Test: "bg-rose-500/5 border-rose-500/10",
};

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>기술 스택</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            검증된 기술로 안정적이고 빠른 데스크톱 경험을 만들었어요.
          </p>
        </AnimateInView>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(TECH_STACK).map((category) => {
            const colorClass = categoryColors[category.label] || "bg-bg-secondary/20 border-border-glass";
            return (
              <AnimateInView key={category.label}>
                <div className={`rounded-2xl border p-6 ${colorClass}`}>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sap-sky">
                    {category.label}
                  </h3>
                  <StaggerContainer className="flex flex-col gap-3">
                    {category.items.map((item) => (
                      <StaggerItem key={item.name}>
                        <div className="group flex items-center justify-between rounded-lg bg-bg-primary/30 px-4 py-3 transition-colors hover:bg-bg-primary/50">
                          <div>
                            <span className="text-sm font-medium text-text-primary">{item.name}</span>
                            {item.version !== "-" && (
                              <span className="ml-2 text-xs text-text-muted">v{item.version}</span>
                            )}
                          </div>
                          <span className="text-xs text-text-muted opacity-0 transition-opacity group-hover:opacity-100">
                            {item.role}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
