import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="layanan">
        <Services />
      </div>
      <div id="tentang">
        <About />
      </div>
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <div id="kontak">
        <Contact />
      </div>
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
