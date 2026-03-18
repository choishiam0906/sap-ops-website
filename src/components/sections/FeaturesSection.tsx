"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView, StaggerContainer, StaggerItem } from "@/components/ui/AnimateInView";
import { FEATURES } from "@/lib/features";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare: Icons.MessageSquare,
  Search: Icons.Search,
  Shield: Icons.Shield,
  Layers: Icons.Layers,
  Database: Icons.Database,
  Bot: Icons.Bot,
  Clock: Icons.Clock,
  Zap: Icons.Zap,
  RefreshCw: Icons.RefreshCw,
  LayoutDashboard: Icons.LayoutDashboard,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>강력한 기능</GradientText>을 하나의 플랫폼에서
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            SAP 운영에 필요한 모든 도구를 데스크톱 앱 하나에 담았어요.
          </p>
        </AnimateInView>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sap-bright/10">
                    {Icon && <Icon size={24} className="text-sap-sky" />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
