import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureShowcaseSection } from "@/components/sections/FeatureShowcaseSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ScreenshotSection } from "@/components/sections/ScreenshotSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureShowcaseSection />
        <SecuritySection />
        <ArchitectureSection />
        <FAQSection />
        <CapabilitiesSection />
        <ScreenshotSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
