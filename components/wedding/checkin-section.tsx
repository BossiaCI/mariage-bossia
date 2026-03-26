"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { UserCheck, Luggage, Ticket, ArrowRight, ArrowDown, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const checkinSteps = [
  {
    step: 1,
    icon: Ticket,
    title: "Votre Invitation",
    description: "Conservez precieusement votre invitation, elle est votre billet d'embarquement pour cette aventure magique.",
  },
  {
    step: 2,
    icon: UserCheck,
    title: "Enregistrement RSVP",
    description: "Confirmez votre presence en ligne avant le 15 Juillet 2026. Chaque invite compte pour nous.",
  },
  {
    step: 3,
    icon: Luggage,
    title: "Preparez vos Bagages",
    description: "Tenue de soiree elegante. N'oubliez pas votre plus beau sourire et votre envie de faire la fete!",
  },
]

export function CheckinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm tracking-wider uppercase text-accent">Zone d'Enregistrement</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6 text-balance">
            Confirmation de presence au Mariage
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Merci de réaliser votre Check-in 1 mois avant l'événement.
          </p>
        </motion.div>

        {/* Check-in Counter Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 sm:mb-16"
        >
          <div className="bg-primary rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-primary-foreground/70 text-xs sm:text-sm uppercase tracking-wider">CHeck-in Ouvert</span>
              </div>
              <span className="bg-accent text-accent-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                Vol EB-26.09
              </span>
            </div>
            
            <div className="bg-background/10 rounded-lg p-4 sm:p-6 text-center">
              {/* <p className="text-primary-foreground/60 text-xs sm:text-sm mb-1 sm:mb-2">S'il vous-plaît, confirmez votre présence en ligne avant le 26 août 2026.</p> */}
              {/* <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-primary-foreground mb-1 sm:mb-2">26 Septembre 2026</p> */}
              <p className="text-primary-foreground/80 text-sm sm:text-base">S'il vous-plaît, confirmez votre présence en ligne avant le 26 août 2026.</p>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Chaque invitation compte pour nous ; conservez précieusement.</p>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div>
                <p className="text-primary-foreground/60 text-[10px] sm:text-xs uppercase mb-0.5 sm:mb-1">Classe</p>
                <p className="text-primary-foreground font-medium text-sm sm:text-base">First Class</p>
                <p className="text-primary-foreground font-medium text-sm sm:text-base">VIP</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-[10px] sm:text-xs uppercase mb-0.5 sm:mb-1">Bagages</p>
                <p className="text-primary-foreground font-medium text-sm sm:text-base">Tenue de soirée élégante.</p>
                <p className="text-primary-foreground font-medium text-sm sm:text-base">Merci d’éviter les tenues blanches.</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-[10px] sm:text-xs uppercase mb-0.5 sm:mb-1">Interdits en Cabine</p>
                <p className="text-primary-foreground font-medium text-sm sm:text-base">Accès réservé aux invités figurant sur la liste et munis d’une invitation.</p>
              </div>
            </div>
            <div className="bg-background/3 rounded-lg mt-4 sm:mt-6 text-center">
              <p className="text-primary-foreground/80 text-sm sm:text-base">😁 N’oubliez pas votre plus beau sourire et votre envie de faire la fête avec nous. 🕺🏾💃🏽</p>
            </div>
            
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {checkinSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="relative"
            >
              <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block bg-primary/10 text-primary text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded mb-1.5 sm:mb-2">
                        Etape {step.step}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-foreground mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow between cards - Desktop */}
              {index < checkinSteps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
              )}

              {/* Arrow between cards - Mobile */}
              {index < checkinSteps.length - 1 && (
                <div className="flex md:hidden justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
