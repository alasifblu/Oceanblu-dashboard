"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Trophy, BookOpen, Users, Calendar, Mic } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "UNICEF ImaGen Venture Youth Challenge",
    subtitle: "Winner — National Level",
    organization: "UNICEF & Jaago Foundation",
    date: "Nov 2023",
    image: "/images/unicef-pitch.jpg",
    description:
      "Led team Ocean Blue from concept through prototype to final pitch before a national panel of judges. Secured USD 1,000 in seed investment as the sole winner of this UNICEF-backed entrepreneurship competition.",
    achievements: [
      "Won against university-level teams across Bangladesh",
      "Managed full product lifecycle: ideation to investor-ready pitch",
      "Secured USD 1,000 seed investment from UNICEF",
    ],
    icon: Trophy,
    featured: true,
  },
  {
    title: "AI-Focused Business eBook",
    subtitle: "Self-Published Author",
    organization: "Independent",
    date: "2025",
    image: "/images/ebook-promo-1.jpg",
    description:
      "Authored and independently published a practical guide on applying generative AI tools for business content creation, productivity, and digital strategy.",
    achievements: [
      "100% organic conversion on launch day",
      "Sold 55 copies on Day 1 with zero paid advertising",
      "Developed 500+ structured prompt engineering frameworks",
    ],
    icon: BookOpen,
    link: "https://drive.google.com/file/d/1UCnSFydpaDV3rwLeKRoIvRyqGLYt6iAw/view",
  },
  {
    title: "Sailor Presents Kuasha Uthsob",
    subtitle: "Acting President — Army IBA Media & Film Club",
    organization: "Army Institute of Business Administration, Sylhet",
    date: "Nov 2025 – Present",
    image: "/images/kuasha-concert.jpg",
    description:
      "Organized a national-level winter cultural festival attracting 1,000+ attendees in Sylhet, overseeing the full event lifecycle from concept to execution.",
    achievements: [
      "Coordinated 18 specialized teams (70 members)",
      "Directed complete digital and cinematic promotion strategy",
      "Managed large-scale cross-functional leadership",
    ],
    icon: Calendar,
  },
  {
    title: "BYLC National Youth Policy Camp",
    subtitle: "Participant & Speaker",
    organization: "Bangladesh Youth Leadership Center (BYLC) & Global Youth Leadership Center",
    date: "Dec 2024",
    image: "/images/bylc-camp.jpg",
    description:
      "Selected as a regional delegate from Sylhet for this multi-division leadership initiative spanning 8 regions of Bangladesh.",
    achievements: [
      "Participated in policy development workshops",
      "Spoke publicly at the camp's plenary session",
      "Focused on amplifying youth voices in governance",
    ],
    icon: Mic,
  },
  {
    title: "AKMCC Alumni Community Brand",
    subtitle: "Social Media Manager",
    organization: "AKMCC All Batch Community",
    date: "Feb 2020 – Present",
    image: "/images/akmcc-community.jpg",
    description:
      "Managed all social media channels and designed complete brand identity for a 12,000-member alumni community.",
    achievements: [
      "Managed 12,000+ member community for 5+ years",
      "Designed logos, promotional posters, and video content",
      "Applied 8-second audience engagement strategy",
    ],
    icon: Users,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-card/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4">Achievements & Leadership</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Key <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30">
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Image */}
                  <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-background">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="p-2 rounded-full bg-primary">
                        <Trophy className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground bg-background/80 px-3 py-1 rounded-full">
                        Winner
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <span>{project.organization}</span>
                      <span>•</span>
                      <span>{project.date}</span>
                    </div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-foreground mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-lg text-primary mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <ul className="space-y-2 mb-6">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-background">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="p-2 rounded-full bg-primary/90">
                        <project.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                    <span>{project.organization}</span>
                    <span>•</span>
                    <span>{project.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary text-sm mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  <ul className="space-y-1.5">
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {project.link && (
                    <Button asChild variant="link" className="mt-4 p-0 h-auto text-primary">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View eBook <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
