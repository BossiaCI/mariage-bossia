"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Church, Wine, Music, Sunrise } from "lucide-react"

const scheduleItems = [
  {
    time: "15:00",
    title: "Cérémonie",
    description: "Échange des vœux dans la chapelle du château",
    icon: Church,
  },
  {
    time: "17:00",
    title: "Cocktail",
    description: "Champagne et amuse-bouches dans les jardins",
    icon: Wine,
  },
  {
    time: "19:30",
    title: "Dîner de Gala",
    description: "Un festin toscan sous les étoiles",
    icon: Sunrise,
  },
  {
    time: "22:00",
    title: "Soirée Dansante",
    description: "Dansez jusqu'au bout de la nuit",
    icon: Music,
  },
]

export function ScheduleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programme" className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Le Grand Jour
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            Programme
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une journée magique vous attend
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {scheduleItems.map((item, index) => (
              <ScheduleItem key={item.time} item={item} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ScheduleItem({
  item,
  index,
  isInView,
}: {
  item: typeof scheduleItems[0]
  index: number
  isInView: boolean
}) {
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className={`relative flex items-center gap-6 md:gap-12 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Time badge - mobile */}
      <div className="absolute left-0 md:hidden">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 ml-20 md:ml-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <div className="bg-background p-6 rounded-lg border border-border">
          <span className="inline-block font-serif text-2xl text-accent mb-2">{item.time}</span>
          <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Icon - desktop */}
      <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-accent items-center justify-center z-10">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
