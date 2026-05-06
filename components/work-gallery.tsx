"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight, Grid3X3, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const workCategories = [
  {
    title: "Army IBA Digital Marketing",
    description: "Campaign analytics, promotional posters, and video content for university admissions",
    items: [
      { image: "/images/army-iba-analytics.jpg", title: "Campaign Analytics Dashboard", type: "Analytics" },
      { image: "/images/army-iba-video-1.jpg", title: "11 Years Excellence - 101K Views", type: "Video" },
      { image: "/images/army-iba-video-2.jpg", title: "Admission Test Video - 35K Views", type: "Video" },
      { image: "/images/army-iba-poster.jpg", title: "Campus Inauguration Poster", type: "Design" },
      { image: "/images/army-iba-poster-2.jpg", title: "Viva Exam Venue Poster", type: "Design" },
      { image: "/images/army-iba-poster-3.jpg", title: "14th Batch Admission", type: "Design" },
      { image: "/images/army-iba-poster-4.jpg", title: "Exam Centers Info", type: "Design" },
      { image: "/images/army-iba-poster-5.jpg", title: "Transport Pricing Poster", type: "Design" },
      { image: "/images/army-iba-poster-6.jpg", title: "Quote Post with Scout Photo", type: "Design" },
      { image: "/images/army-iba-poster-7.jpg", title: "Admission Circular", type: "Design" },
      { image: "/images/army-iba-carousel.jpg", title: "Campaign Carousel Grid", type: "Design" },
    ],
  },
  {
    title: "Kuasha Uthsob Festival",
    description: "Promotional materials and event coverage for the cultural festival",
    items: [
      { image: "/images/kuasha-stage.jpg", title: "Event Stage Setup", type: "Event" },
      { image: "/images/kuasha-concert.jpg", title: "Live Concert Performance", type: "Event" },
      { image: "/images/kuasha-ig-post.jpg", title: "Instagram Announcement - 1.3K Likes", type: "Social" },
      { image: "/images/kuasha-poster-1.jpg", title: "Tickets Available Poster", type: "Design" },
      { image: "/images/kuasha-poster-2.jpg", title: "Full Event Details Poster", type: "Design" },
    ],
  },
  {
    title: "Yes Academy Campaigns",
    description: "Social media campaigns for IELTS/PTE institute",
    items: [
      { image: "/images/yes-academy-1.jpg", title: "IELTS Master Course Ad", type: "Campaign" },
      { image: "/images/yes-academy-2.jpg", title: "Cashback Winners Post", type: "Campaign" },
    ],
  },
  {
    title: "Leadership & Community",
    description: "Leadership roles and community management work",
    items: [
      { image: "/images/unicef-pitch.jpg", title: "UNICEF ImaGen Challenge - Team Pitch", type: "Event" },
      { image: "/images/unicef-single.jpg", title: "UNICEF Pitch Day", type: "Event" },
      { image: "/images/bylc-camp.jpg", title: "BYLC Youth Policy Camp", type: "Event" },
      { image: "/images/bylc-group.jpg", title: "BYLC Delegates & Speaker", type: "Event" },
      { image: "/images/akmcc-community.jpg", title: "AKMCC Community - 24K Members", type: "Community" },
      { image: "/images/aibabc-secretary.jpg", title: "AIBA Business Club - Organizing Secretary", type: "Leadership" },
    ],
  },
  {
    title: "eBook & Content",
    description: "AI-focused business eBook with 500+ prompts",
    items: [
      { image: "/images/ebook-promo-1.jpg", title: "500+ ChatGPT Prompts eBook", type: "Product" },
      { image: "/images/ebook-promo-2.jpg", title: "eBook Table of Contents", type: "Product" },
    ],
  },
]

export function WorkGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const allImages = workCategories.flatMap((cat) => cat.items)
  const currentIndex = selectedImage ? allImages.findIndex((img) => img.image === selectedImage.image) : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(allImages[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < allImages.length - 1) {
      setSelectedImage(allImages[currentIndex + 1])
    }
  }

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-card/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Grid3X3 className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium">Portfolio</p>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of digital marketing campaigns, promotional designs, event coverage, and leadership moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
        >
          <Button
            variant={activeCategory === null ? "default" : "secondary"}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          {workCategories.map((cat) => (
            <Button
              key={cat.title}
              variant={activeCategory === cat.title ? "default" : "secondary"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(cat.title)}
            >
              {cat.title.split(" ").slice(0, 2).join(" ")}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          {workCategories
            .filter((cat) => activeCategory === null || cat.title === activeCategory)
            .map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.image}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      className="group relative aspect-square rounded-xl overflow-hidden bg-background cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-2 py-0.5 text-xs bg-primary/90 text-primary-foreground rounded-full mb-1">
                          {item.type}
                        </span>
                        <p className="text-sm font-medium text-foreground line-clamp-2">{item.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground hover:text-primary z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </Button>

          {currentIndex > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-foreground hover:text-primary z-10"
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          )}

          {currentIndex < allImages.length - 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-foreground hover:text-primary z-10"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          )}

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-xl bg-background"
              />
            </div>
            <p className="text-center text-foreground font-medium mt-4">{selectedImage.title}</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}
