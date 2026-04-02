"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Heart, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"


export function StorySection() {

  const t = useTranslations('Story');

  const storyTimeline = [
  {
    year: t('year1'),
    location: t('location1'),
    title: t('title1'),
    description: t('description1'),
    description2: t('description12'),
    icon: MapPin,
  },
  {
    year: t('year2'),
    location: t('location2'),
    title: t('title2'),
    description: t('description2'),
    description2: t('description22'),
    icon: Heart,
  },
  {
    year: t('year3'),
    location: t('location3'),
    title: t('title3'),
    description: t('description3'),
    icon: Sparkles,
  },
]
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="histoire" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t('title')}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            {t('subtitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {storyTimeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: typeof storyTimeline[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEven = index % 2 === 0
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <div className="bg-background p-8 rounded-lg border border-border shadow-sm">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <span className="text-accent font-serif text-xl">{item.year}</span>
            <span className="text-muted-foreground">—</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {item.location}
            </span>
          </div>
          <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          <p className="text-muted-foreground leading-relaxed">{item?.description2}</p>
        </div>
      </div>

      {/* Icon */}
      <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-accent flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
