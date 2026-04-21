"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Camera, Play, Pause, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function VideoCard({ video, index, isInView, onOpenModal }: { 
  video: typeof videos[0], 
  index: number, 
  isInView: boolean,
  onOpenModal: (url: string) => void 
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {})
          setIsPlaying(true)
        } else if (videoRef.current) {
          videoRef.current.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch(() => {})
        setIsPlaying(true)
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-card border border-border cursor-pointer"
      onClick={() => onOpenModal(video.videoUrl)}
    >
      {/* Video Preview */}
      <div className="relative aspect-video bg-background">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
        />
        {/* Pause/Play Button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-foreground" />
          ) : (
            <Play className="w-5 h-5 text-foreground fill-current" />
          )}
        </button>
        {/* Click to expand overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            <div className="p-4 rounded-full bg-primary/90">
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="inline-block px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full mb-2">
          {video.category}
        </span>
        <h4 className="font-semibold text-foreground mb-1">{video.title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
      </div>
    </motion.div>
  )
}

const photoStories = [
  {
    title: '"সে" (She)',
    description: "A photostory capturing emotions and narrative through cinematic photography",
    image: "/images/photo-story-shey.jpg",
    link: "https://www.facebook.com/share/p/17xoGaWLk8/",
    cast: "Emon Farabe, Ananna, Durjoy Singha",
    role: "Direction & Photography",
    engagement: "259 likes, 103 comments",
  },
  {
    title: '"তৃতীয় নারী" (Third Woman)',
    description: "Artistic photography series shot on railway tracks with beautiful compositions",
    image: "/images/photo-story-tritiyo-nari.jpg",
    link: "https://www.facebook.com/share/p/1H9epQndW6/",
    cast: "Emon Farabe & Kazi Suchi",
    role: "Direction & Photography",
    engagement: "839 likes, 101 comments",
  },
]

const videos = [
  {
    title: "Army IBA Promotional Video",
    description: "Institutional promotional content for university admissions",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e3e3d7e7-8e45-452b-9ff5-1c1e7b2d1d2f-snapsave-app_11_hd%20%281%29.mp4.mp4",
    category: "Institutional",
  },
  {
    title: "Digital Marketing Campaign",
    description: "Short-form video content for social media campaigns",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cba49df0-9735-4c6c-a528-168b4adea89e-snapsave-app_1812527885888248_sd.mp4.mp4",
    category: "Marketing",
  },
  {
    title: "Creative Campaign Video",
    description: "Engaging video content designed for 8-second audience engagement",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8a9c4279-df24-4b9b-9dab-9f701e6b7abb-snapsave-app_863141818615923_hd%20%281%29.mp4.mp4",
    category: "Creative",
  },
  {
    title: "Brand Storytelling Video",
    description: "Visual storytelling for brand awareness",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81d4082f-51d7-4452-9ebc-918105f2aa29-snapsave-app_1393667221951166_hd%20%281%29.mp4.mp4",
    category: "Branding",
  },
  {
    title: "Social Media Content",
    description: "Optimized content for social media platforms",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/893c9f88-c04c-4f7c-9fef-d5c43f350862-snapsave-app_11_hd%20%281%29%20%282%29.mp4.mp4",
    category: "Social",
  },
  {
    title: "Promotional Content",
    description: "High-impact promotional video production",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/59428a9b-7a49-41e8-8248-025691c052b3-snapsave-app_11_hd%20%281%29%20%281%29.mp4.mp4",
    category: "Promotional",
  },
]

export function CreativeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="creative" className="py-16 sm:py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4">Visual Storytelling</p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Creative <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Photography, cinematography, and video production showcasing the art of visual storytelling
            with professional techniques and 8-second audience engagement strategy.
          </p>
        </motion.div>

        {/* Photo Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-primary" />
            <h3
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Photo Stories
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {photoStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-background">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4
                    className="text-xl font-bold text-foreground mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {story.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">{story.description}</p>
                  <div className="space-y-1 text-sm mb-4">
                    <p className="text-muted-foreground">
                      <span className="text-primary">Cast:</span> {story.cast}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary">Role:</span> {story.role}
                    </p>
                    <p className="text-primary font-medium">{story.engagement}</p>
                  </div>
                  <Button asChild size="sm" variant="secondary" className="rounded-full">
                    <a href={story.link} target="_blank" rel="noopener noreferrer">
                      View on Facebook <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Play className="w-6 h-6 text-primary" />
            <h3
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Video Production
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoCard
                key={video.title}
                video={video}
                index={index}
                isInView={isInView}
                onOpenModal={setActiveVideo}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-foreground hover:text-primary"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <video
              src={activeVideo}
              className="w-full rounded-xl"
              controls
              autoPlay
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
