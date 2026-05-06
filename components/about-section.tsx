"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { 
  Sparkles, 
  Target, 
  Camera, 
  TrendingUp,
  Award,
  Users,
  BookOpen,
  MapPin,
  Mail,
  Phone
} from "lucide-react"

const profileImages = [
  { src: "/images/profile-main.jpg", alt: "Professional portrait" },
  { src: "/images/profile-alt-1.jpg", alt: "Artistic portrait" },
  { src: "/images/profile-alt-2.jpg", alt: "Teal background portrait" },
  { src: "/images/profile-alt-3.jpg", alt: "Casual outdoor portrait" },
]

const skills = [
  {
    category: "Marketing & Growth",
    items: [
      "Digital Marketing Strategy",
      "Performance Marketing",
      "Meta Ads Manager",
      "SEO & Campaign Analytics",
      "Brand Development",
      "Growth Strategy",
    ],
  },
  {
    category: "AI & Technology",
    items: [
      "ChatGPT & Claude",
      "Midjourney",
      "Google Gemini",
      "Prompt Engineering",
      "AI Automation (n8n)",
      "CRM Workflow Design",
    ],
  },
  {
    category: "Creative & Visual",
    items: [
      "Cinematography",
      "Short-form Video",
      "Video Editing",
      "Poster & Logo Design",
      "Photo Editing",
      "Visual Storytelling",
    ],
  },
]

const highlights = [
  {
    icon: Award,
    value: "USD 1,000",
    label: "UNICEF Seed Investment",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "CAC Reduction",
  },
  {
    icon: Users,
    value: "12,000+",
    label: "Community Members",
  },
  {
    icon: Target,
    value: "20 Lakh BDT",
    label: "First Client Contract",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-card/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary font-medium mb-4">About Me</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Building Brands Through
            <br />
            <span className="text-primary">Strategy & Creativity</span>
          </h2>
        </motion.div>

        {/* Profile Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden mb-4 bg-background">
            <Image
              src={profileImages[activeImage].src}
              alt={profileImages[activeImage].alt}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
          </div>
          <div className="flex gap-3">
            {profileImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => setActiveImage(index)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all bg-background ${
                  activeImage === index
                    ? "border-primary scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a BBA candidate at Bangladesh University of Professionals - Army IBA, Sylhet, 
                expected to graduate in July 2026. My journey combines the analytical rigor of business 
                education with creative expression through digital marketing and visual storytelling.
              </p>
              <p>
                As the Founder of <span className="text-primary font-medium">OceanBlu Digital</span>, 
                I&apos;ve built a B2B MarTech agency delivering digital marketing, technology development, 
                and AI automation solutions. Our first client, NAAAS Holding & Venture BD Ltd., signed 
                a 20 Lakh BDT contract - a testament to the value we deliver.
              </p>
              <p>
                My work spans from reducing university admission CAC by 40% through data-driven campaigns, 
                to winning the UNICEF ImaGen Venture Youth Challenge with USD 1,000 in seed investment. 
                I believe in the power of combining AI fluency, cinematography, and strategic thinking 
                to create impactful brand experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Sylhet, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:alasifsikhon@gmail.com" className="hover:text-foreground transition-colors">
                  alasifsikhon@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+8801629940178" className="hover:text-foreground transition-colors">
                  +880 1629 940178
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category}>
                <div className="flex items-center gap-2 mb-4">
                  {index === 0 && <TrendingUp className="w-5 h-5 text-primary" />}
                  {index === 1 && <Sparkles className="w-5 h-5 text-primary" />}
                  {index === 2 && <Camera className="w-5 h-5 text-primary" />}
                  <h3 className="font-semibold text-foreground">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-secondary/50 border border-border text-center"
            >
              <highlight.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p
                className="text-2xl lg:text-3xl font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {highlight.value}
              </p>
              <p className="text-sm text-muted-foreground">{highlight.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Education
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <p className="text-primary font-medium mb-2">Expected July 2026</p>
              <h4 className="font-semibold text-foreground mb-1">Bachelor of Business Administration</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Bangladesh University of Professionals - Army IBA, Sylhet
              </p>
              <p className="text-sm text-muted-foreground">CGPA: 3.15 / 4.00</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <p className="text-primary font-medium mb-2">2020</p>
              <h4 className="font-semibold text-foreground mb-1">Higher Secondary Certificate (HSC)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Abdul Kadir Molla City College, Narsingdi
              </p>
              <p className="text-sm text-muted-foreground">GPA: 5.00 / 5.00</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <p className="text-primary font-medium mb-2">2018</p>
              <h4 className="font-semibold text-foreground mb-1">Secondary School Certificate (SSC)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Brahmondi KKM Government High School, Narsingdi
              </p>
              <p className="text-sm text-muted-foreground">GPA: 5.00 / 5.00</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
