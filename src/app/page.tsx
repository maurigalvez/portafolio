import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import TimelineSection from "@/components/TimelineSection";
import GitHubActivity from "@/components/GitHubActivity";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <TimelineSection />
      <GitHubActivity />
      <ContactSection />
      <Footer />
    </>
  );
}
