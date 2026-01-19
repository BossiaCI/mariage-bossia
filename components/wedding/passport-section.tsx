"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Stamp } from "lucide-react"

const stamps = [
  { city: "Paris", country: "France", date: "2019", emoji: "FR" },
  { city: "Tokyo", country: "Japon", date: "2021", emoji: "JP" },
  { city: "Santorin", country: "Grece", date: "2023", emoji: "GR" },
  { city: "Lisbone", country: "Portugal", date: "2026", emoji: "IT" },
]

export function PassportSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4">
            Nos Aventures
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6 text-balance">
            Notre Passeport
          </h2>
        </motion.div>

        {/* Passport Book */}
        <motion.div
          initial={{ opacity: 0, rotateY: -20 }}
          animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Passport Cover */}
            <div className="bg-primary rounded-lg p-5 sm:p-8 md:p-12 shadow-2xl border-2 sm:border-4 border-primary/80">
              {/* Gold embossed header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-block border-2 border-accent/60 rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
                  <Stamp className="w-7 h-7 sm:w-10 sm:h-10 text-accent" />
                </div>
                <p className="text-accent text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-1 sm:mb-2">Passeport de Voyage</p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground">
                  Edénia & Bossia
                </h3>
              </div>

              {/* Passport pages - stamps */}
              <div className="bg-secondary/90 rounded-lg p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {stamps.map((stamp, index) => (
                    <motion.div
                      key={stamp.city}
                      initial={{ opacity: 0, scale: 0, rotate: -20 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: Math.random() * 10 - 5 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      className="relative"
                    >
                      <div className="border-2 border-dashed border-primary/40 rounded-lg p-3 sm:p-4 text-center bg-card/50">
                        <div className="text-lg sm:text-2xl mb-1 sm:mb-2 font-bold text-primary/60">{stamp.emoji}</div>
                        <p className="font-serif text-sm sm:text-base md:text-lg text-foreground">{stamp.city}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{stamp.country}</p>
                        <div className="mt-1 sm:mt-2 inline-block border border-accent/60 rounded px-1.5 sm:px-2 py-0.5 sm:py-1">
                          <p className="text-[10px] sm:text-xs text-accent font-medium">{stamp.date}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Passport info */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Titulaires</p>
                      <p className="font-serif text-foreground text-sm sm:text-base">Edénia & Bossia</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Destination</p>
                      <p className="font-serif text-foreground text-sm sm:text-base">Mariage Eternel</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Date d'Emission</p>
                      <p className="font-serif text-foreground text-sm sm:text-base">26 Septembre 2026</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Validite</p>
                      <p className="font-serif text-foreground text-sm sm:text-base">Pour Toujours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
