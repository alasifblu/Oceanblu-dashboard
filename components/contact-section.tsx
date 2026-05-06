"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "alasifsikhon@gmail.com",
    href: "mailto:alasifsikhon@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1629 940178",
    href: "tel:+8801629940178",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sylhet, Bangladesh",
    href: null,
  },
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-al-asif-sarkar-sikhon-806967250",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DkvzYxBus/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alasif_blu",
    icon: Instagram,
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-card/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-4">Get In Touch</p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you need digital marketing strategy, AI-powered content solutions, 
              or creative visual storytelling for your brand, I&apos;m here to help transform 
              your vision into measurable results.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium text-foreground">{method.value}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{method.label}</p>
                        <p className="font-medium text-foreground">{method.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-full p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to elevate your brand?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  From AI-powered marketing strategies to cinematic visual content, 
                  I bring a unique blend of analytical thinking and creative execution 
                  to every project.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Digital Marketing & Growth Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">AI-Powered Content Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Visual Storytelling & Cinematography</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">Brand Development & Campaign Execution</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <a href="mailto:alasifsikhon@gmail.com">
                      Send Email <Mail className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <a href="tel:+8801629940178">
                      Call Now <Phone className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
