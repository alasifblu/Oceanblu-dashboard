"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, ExternalLink } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Founder & Growth Strategist",
    company: "OceanBlu Digital",
    location: "Sylhet, Bangladesh",
    period: "2024 – Present",
    logo: "/images/oceanblu-logo.jpg",
    highlights: [
      "Founded OceanBlu Digital, a B2B MarTech agency delivering digital marketing, technology development, and AI automation solutions across Real Estate, Medical, and Education sectors.",
      "Secured a 20,00,000 BDT total contract from NAAAS Holding & Venture BD Ltd. (6-wing conglomerate) as the agency's first client.",
      "Led all client pitch strategy, investor-readiness documentation, and business development activities.",
      "Built and managed cross-functional internal teams across design, development, content, and strategy functions.",
    ],
    tags: ["Digital Marketing", "AI Automation", "Business Development", "MarTech"],
  },
  {
    title: "Digital Marketing Lead (On-Campus)",
    company: "Army Institute of Business Administration, Sylhet",
    location: "Sylhet, Bangladesh",
    period: "Dec 2022 – Present",
    logo: "/images/army-iba-analytics.jpg",
    highlights: [
      "Engineered end-to-end digital marketing campaigns for university admissions, reducing Cost of Acquisition (CAC) by 40%.",
      "Achieved a 30% increase in applicant volume through data-driven audience targeting with CPC of BDT 2.77.",
      "Directed a 10-member student team for coordinated admissions outreach and digital content production.",
      "Produced institutional promotional materials, posters, digital assets, and short-form video content.",
    ],
    tags: ["Meta Ads", "Campaign Analytics", "Team Leadership", "Content Production"],
  },
  {
    title: "Digital Marketing Executive",
    company: "Yes Global Bangladesh & Yes Academy",
    location: "Sylhet, Bangladesh",
    period: "Aug 2025 – Oct 2025",
    logo: "/images/yes-academy-1.jpg",
    highlights: [
      "Planned and executed paid social campaigns for a study-abroad consultancy and IELTS/PTE institute.",
      "Generated direct enrollment impact: launched 4 new IELTS/PTE batches within a single month (32 students).",
      "Increased physical office footfall by 20% through targeted local audience campaigns on Meta Ads Manager.",
    ],
    tags: ["Paid Social", "Lead Generation", "Education Marketing"],
  },
  {
    title: "AI Content Strategist & Campaign Developer",
    company: "Independent Freelance",
    location: "Remote",
    period: "2024 – Present",
    highlights: [
      "Designed AI-powered content workflows using ChatGPT, Midjourney, and Google Gemini for campaign production.",
      "Authored 500+ structured prompt engineering frameworks for marketing copy and brand storytelling templates.",
      "Delivered campaign strategy and content development for multiple digital agencies and brands.",
    ],
    tags: ["AI Strategy", "Prompt Engineering", "Content Strategy"],
  },
  {
    title: "Social Media Manager",
    company: "AKMCC All Batch Community",
    location: "Sylhet, Bangladesh",
    period: "Feb 2020 – Present",
    highlights: [
      "Managed all social media channels for a 12,000-member alumni community with strategic content planning.",
      "Designed community brand assets including logos, promotional posters, and cinematic video content.",
      "Applied professional cinematography principles and 8-second engagement strategy for content production.",
    ],
    tags: ["Community Management", "Brand Design", "Video Production"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4">Professional Journey</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 md:-translate-x-1/2 mt-8 z-10 ring-4 ring-background" />

              {/* Content Card */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {exp.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{exp.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h3
            className="text-2xl font-bold text-foreground text-center mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Google — Fundamentals of Digital Marketing",
              "Google — Understanding Customer Needs and Online Behavior",
              "Coursera — Search Engine Optimization (SEO)",
              "LinkedIn Learning — Scaling Your Business",
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border"
              >
                <ExternalLink className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
