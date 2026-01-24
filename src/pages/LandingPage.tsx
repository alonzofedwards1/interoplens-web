import SEO from "../components/SEO";
import HeroSection from "../sections/HeroSection";
import ProblemSection from "../sections/ProblemSection";
import SolutionSection from "../sections/SolutionSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import CapabilitiesSection from "../sections/CapabilitiesSection";
import AudienceSection from "../sections/AudienceSection";
import RoadmapSection from "../sections/RoadmapSection";
import CTASection from "../sections/CTASection";
import { useGsapReveal } from "../hooks/useGsapReveal";

const LandingPage = () => {
  useGsapReveal(".section-reveal");
  useGsapReveal(".card-reveal");

  return (
    <div className="bg-slate-50 text-slate-900">
      <SEO title="Interoplens | Interoperability Observability" />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <AudienceSection />
      <RoadmapSection />
      <CTASection />
      <footer className="border-t border-slate-200 bg-white py-6 text-sm text-slate-500">
        <div className="container-base flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Interoplens. All rights reserved.</span>
          <span>contact@interoplens.com</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
