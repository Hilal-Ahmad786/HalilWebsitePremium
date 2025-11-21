
// ===== src/app/page.tsx =====
import { 
  HeroSection, 
  ServicesGrid, 
  ProcessSteps, 
  StatsSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  ServiceCoverageMap 
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <ProcessSteps />
      <TestimonialsSection />
      <ServiceCoverageMap />
      <FAQSection />
      <CTASection />
    </>
  );
}