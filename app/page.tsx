import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { WorkGallery } from "@/components/work-gallery"
import { CreativeSection } from "@/components/creative-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkGallery />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CreativeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
