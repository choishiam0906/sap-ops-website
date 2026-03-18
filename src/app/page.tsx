import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ScreenshotSection } from "@/components/sections/ScreenshotSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SecuritySection />
        <ArchitectureSection />
        <TechStackSection />
        <ScreenshotSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
