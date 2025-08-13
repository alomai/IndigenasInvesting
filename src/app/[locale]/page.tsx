import Header from "../../components/Header"
import Hero from "../../components/hero"
import FeaturesSection from "../../components/features"
import Gentrification from "../../components/gentrification"
import InvestmentJourney from "../../components/investment-journey"
import Testimonial from "../../components/testimonial"
import CommunityInvestmentSection from "../../components/community-investment"
import Pricing from "../../components/pricing"
import CallToAction from "../../components/call-to-action"
import Contact from "../../components/contact"
import { redirect } from "next/navigation";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Gentrification />
      <FeaturesSection />
      <InvestmentJourney />
      <Testimonial />
      <CommunityInvestmentSection />
      <Pricing />
      <CallToAction />
      <Contact />
    </>
  );
redirect('/en');
}
