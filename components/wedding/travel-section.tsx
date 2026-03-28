"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Plane, Hotel, Car, MapPin, QrCode, Barcode } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const travelInfo = [
  {
    icon: Plane,
    title: "Par Avion",
    description: "Aeroporto Humberto Delgado de Lisboa, à 43km du lieu de réception.",
    details: "",
  },
  {
    icon: Hotel,
    title: "Hebergement",
    description: "Pour voir nos hébergements favoris près du lieu de réception, voir prochaine section.",
    details: "",
  },
  {
    icon: Car,
    title: "Par Voiture (Taxi, Uber)",
    description: "Prendre l’autoroute A8 en direction de Mafra. Puis continuer sur la route A21 en direction d’Ericeira.",
    details: "",
  },
  {
    icon: MapPin,
    title: "Le Lieu",
    description: "“Quinta do Roseiral” - Estrada de Sto Isidoro, 2655-000 Ericeira, Portugal",
    details: "",
  },
]

export function TravelSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="voyage" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4">
            Informations Pratiques
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6 text-balance">
            Votre Billet d'Avion
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Tout ce que vous devez savoir pour nous rejoindre en Ericeira
          </p>
        </motion.div>

        {/* Boarding Pass - Enhanced */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 sm:mb-16"
        > */}
          {/* <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg sm:rounded-xl shadow-2xl overflow-hidden border border-border"> */}
              {/* Ticket Header */}
              {/* <div className="bg-primary px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  <span className="font-serif text-base sm:text-lg md:text-xl text-primary-foreground">E&B Airlines</span>
                </div>
                <span className="text-primary-foreground/70 text-[10px] sm:text-xs md:text-sm">PREMIERE CLASSE</span>
              </div> */}

              {/* Main Ticket Body */}
              {/* <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-12"> */}
                  {/* Departure */}
                  {/* <div className="flex-1 text-center sm:text-left">
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Depart</p>
                    <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">VOS</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Votre Ville</p>
                  </div> */}

                  {/* Flight Path */}
                  {/* <div className="flex items-center gap-2 py-2 sm:py-4 justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-accent" />
                    <div className="flex-1 min-w-[50px] sm:min-w-[60px] md:min-w-[100px] border-t-2 border-dashed border-accent relative">
                      <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                    </div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent" />
                  </div> */}

                  {/* Arrival */}
                  {/* <div className="flex-1 text-center sm:text-right">
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Arrivee</p>
                    <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">FLR</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Lisbone, Portugal</p>
                  </div>
                </div> */}

                {/* Ticket Details Grid */}
                {/* <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-border">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Passager</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">Votre Nom</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Date</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">26 Septembre 2026</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Heure</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">15:00</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Porte</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">LOVE</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Vol</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">EB-2026</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Siege</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">VIP</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Classe</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">Amour Eternel</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Groupe</p>
                      <p className="font-medium text-foreground text-sm sm:text-base">Prioritaire</p>
                    </div>
                  </div>
                </div> */}

                {/* Barcode Section */}
                {/* <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-border flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground/5 rounded-lg flex items-center justify-center border border-border">
                      <QrCode className="w-8 h-8 sm:w-10 sm:h-10 text-foreground/60" />
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      <p>Scannez pour confirmer</p>
                      <p>votre presence</p>
                    </div>
                  </div> */}
                  
                  {/* Barcode visual */}
                  {/* <div className="flex items-center gap-px overflow-hidden max-w-full">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground"
                        style={{ width: "3px", height: "30px" }}
                      />
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Tear-off stub */}
              {/* <div className="bg-secondary/50 px-4 sm:px-6 py-3 sm:py-4 border-t border-dashed border-border flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Barcode className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-mono text-[10px] sm:text-xs">EB2026-LOVE-VIP-001</span>
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground">Conserver ce coupon</span>
              </div>
            </div>
          </div> */}
        {/* </motion.div> */}

        {/* Travel info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {travelInfo.map((info, index) => (
            <TravelCard key={info.title} info={info} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TravelCard({
  info,
  index,
  isInView,
}: {
  info: (typeof travelInfo)[0]
  index: number
  isInView: boolean
}) {
  const Icon = info.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
    >
      <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4 sm:p-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3 sm:mb-4">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl text-foreground mb-1 sm:mb-2">{info.title}</h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{info.description}</p>
          <p className="text-[10px] sm:text-xs text-accent font-medium">{info.details}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
