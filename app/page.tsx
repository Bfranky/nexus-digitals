import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import TrustBar     from "@/components/Trustbar";
import ValueProps   from "@/components/Valueprops";
import Portfolio    from "@/components/Portfolio";
import Process      from "@/components/Process";
import Industries   from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Pricing      from "@/components/Pricing";
import CTABanner    from "@/components/Ctabanner";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProps />
      <Portfolio />
      <Process />
      <Industries />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Contact />
      <Footer />
    </>
  );
}