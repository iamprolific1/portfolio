import About from "@/app/components/About";
import ContactSection from "@/app/components/Contact";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import PricingSection from "@/app/components/PricingSection";
import ProjectSection from "@/app/components/Projects";


export default function LandingPage() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <ProjectSection />
            <PricingSection />
            <ContactSection />
        </>
    );
}