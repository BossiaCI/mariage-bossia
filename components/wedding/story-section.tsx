"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Heart, Sparkles } from "lucide-react"

const storyTimeline = [
  {
    year: "4 Juin 2023",
    location: "Ile-de-France, France",
    title: "La Rencontre",
    description: "Bossia à proposé à Edénia de se retrouver au Parc de Sceaux, pour enfin se découvrir en vrai, après un mois d’échanges sur WhatsApp. Il arrive avec 1 heure et demie de retard, ayant perdu son train…",
    description2:"Mais malgré cela, après qu’ Edénia s’est cachée entre les arbres pendant que Bossia la cherchait, leurs regards se sont croisés finalement… et ce qui n’était encore que de simples conversations est devenu, pour eux deux, une évidence.",
    icon: MapPin,
  },
  {
    year: "12 Juin 2023",
    location: "Lille, France",
    title: "Officiellement en couple",
    description: "Bossia invite Edénia à passer le week-end à Lille, où ils profitent d’un pique-nique au parc de la Citadelle et visitent le Zoo. Le 12 juin, avant le retour d’ Edénia à Paris, Bossia",
    description2: "demande, en avance sur son anniversaire, le plus beau des cadeaux: devenir officiellement copains.",
    icon: Sparkles,
  },
  {
    year: "10 août2024",
    location: "Paris 14ème, France",
    title: "Naissance d'Enola",
    description: "L’été suivant, ils s’installent ensemble près du cœur de Paris. Quelques mois après, naît Enola, et avec elle surgit naturellement le désir de sceller leur amour par le mariage.",
    icon: Heart,
  },
]

export function StorySection() {
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
            la Rencontre
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            Au Parc des Sceaux
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Deux cœurs voyageurs qui se sont trouvés
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
