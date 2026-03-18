"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Lock, Cpu, Database, Shield, RefreshCw, Search, Bot } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { AnimateInView } from "@/components/ui/AnimateInView";

interface Layer {
  id: string;
  name: string;
  color: string;
  description: string;
  modules: { name: string; icon: React.ReactNode }[];
}

const layers: Layer[] = [
  {
    id: "renderer",
    name: "Renderer (React)",
    color: "from-sap-sky/20 to-sap-sky/5",
    description: "React 18 + TypeScript 기반 UI. 14개 이상의 페이지와 Zustand 상태 관리를 사용해요.",
    modules: [
      { name: "Chat UI", icon: <Monitor size={16} /> },
      { name: "Cockpit", icon: <Monitor size={16} /> },
      { name: "CBO Viewer", icon: <Search size={16} /> },
    ],
  },
  {
    id: "preload",
    name: "Preload (IPC Bridge)",
    color: "from-sap-bright/20 to-sap-bright/5",
    description: "Renderer와 Main 사이의 안전한 IPC 브릿지. contextBridge API로 신뢰 경계를 지켜요.",
    modules: [
      { name: "IPC Bridge", icon: <Lock size={16} /> },
      { name: "API Surface", icon: <Shield size={16} /> },
    ],
  },
  {
    id: "main",
    name: "Main Process (Electron)",
    color: "from-sap-deep/40 to-sap-deep/10",
    description: "핵심 비즈니스 로직. Provider Router, CBO Analyzer, Storage, Auth 등이 동작해요.",
    modules: [
      { name: "Provider Router", icon: <RefreshCw size={16} /> },
      { name: "CBO Analyzer", icon: <Search size={16} /> },
      { name: "SQLite Storage", icon: <Database size={16} /> },
      { name: "Custom Agents", icon: <Bot size={16} /> },
    ],
  },
];

export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimateInView className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <GradientText>3계층 아키텍처</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Electron의 프로세스 격리를 활용한 안전한 아키텍처예요.
            각 계층은 IPC를 통해서만 통신해요.
          </p>
        </AnimateInView>

        <AnimateInView className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            {layers.map((layer, index) => (
              <div key={layer.id}>
                <motion.div
                  onHoverStart={() => setActiveLayer(layer.id)}
                  onHoverEnd={() => setActiveLayer(null)}
                  className={`cursor-pointer rounded-2xl border border-border-glass bg-gradient-to-r ${layer.color} p-6 transition-all duration-300 ${
                    activeLayer === layer.id ? "border-sap-sky/40 shadow-lg shadow-sap-bright/10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-primary font-mono">{layer.name}</h3>
                    <div className="flex gap-2">
                      {layer.modules.map((mod) => (
                        <span
                          key={mod.name}
                          className="flex items-center gap-1 rounded-lg bg-bg-primary/50 px-3 py-1 text-xs text-text-secondary"
                        >
                          {mod.icon}
                          {mod.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeLayer === layer.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-sm text-text-secondary"
                      >
                        {layer.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Connection arrow */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-4 w-px bg-border-glass" />
                      <span className="text-xs text-text-muted">IPC</span>
                      <div className="h-4 w-px bg-border-glass" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
