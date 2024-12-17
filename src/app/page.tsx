import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
