"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Plane, Clock, CheckCircle2 } from "lucide-react"

const flights = [
  {
    flight: "EB-2026",
    destination: "Lisbone",
    gate: "LOVE",
    time: "15:00",
    status: "ON TIME",
    statusShort: "OK",
    statusColor: "text-green-600",
  },
  {
    flight: "WED-001",
    destination: "CEREMONIE",
    gate: "A1",
    time: "15:00",
    status: "BOARDING",
    statusShort: "EMB",
    statusColor: "text-amber-600",
  },
  {
    flight: "WED-002",
    destination: "COCKTAIL",
    gate: "JARDINS",
    time: "17:00",
    status: "ON TIME",
    statusShort: "OK",
    statusColor: "text-green-600",
  },
  {
    flight: "WED-003",
    destination: "DINER GALA",
    gate: "TERRASSE",
    time: "19:30",
    status: "ON TIME",
    statusShort: "OK",
    statusColor: "text-green-600",
  },
  {
    flight: "WED-004",
    destination: "SOIREE",
    gate: "GRAND HALL",
    time: "22:00",
    status: "ON TIME",
    statusShort: "OK",
    statusColor: "text-green-600",
  },
]

function FlipChar({ char, delay }: { char: string; delay: number }) {
  const [displayChar, setDisplayChar] = useState(" ")
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayChar(char)
    }, delay)
    return () => clearTimeout(timeout)
  }, [char, delay])

  return (
    <span className="inline-block bg-foreground/90 text-background px-1 sm:px-1.5 py-0.5 sm:py-1 rounded-sm font-mono text-xs sm:text-sm md:text-base min-w-[0.9em] sm:min-w-[1.2em] text-center">
      {displayChar}
    </span>
  )
}

function FlipText({ text, baseDelay }: { text: string; baseDelay: number }) {
  return (
    <span className="inline-flex gap-px sm:gap-0.5">
      {text.split("").map((char, i) => (
        <FlipChar key={i} char={char} delay={baseDelay + i * 50} />
      ))}
    </span>
  )
}

export function DepartureBoardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-accent mb-3 sm:mb-4">
            Aeroport International du Mariage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-background mb-4 text-balance">
            Tableau des Departs
          </h2>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-mono text-base sm:text-lg">{currentTime}</span>
          </div>
        </motion.div>

        {/* Departure Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-background/10 overflow-hidden"
        >
          {/* Header - Desktop */}
          <div className="hidden sm:block bg-background/10 px-4 md:px-6 py-3 sm:py-4 border-b border-background/10">
            <div className="grid grid-cols-5 gap-2 md:gap-4 text-xs md:text-sm uppercase tracking-wider text-accent">
              <span>Vol</span>
              <span>Destination</span>
              <span>Porte</span>
              <span>Heure</span>
              <span>Statut</span>
            </div>
          </div>

          {/* Header - Mobile */}
          <div className="sm:hidden bg-background/10 px-3 py-3 border-b border-background/10">
            <div className="grid grid-cols-4 gap-2 text-[10px] uppercase tracking-wider text-accent">
              <span>Vol</span>
              <span>Dest.</span>
              <span>Heure</span>
              <span className="text-right">Statut</span>
            </div>
          </div>

          {/* Flights - Desktop */}
          <div className="hidden sm:block divide-y divide-background/10">
            {flights.map((flight, index) => (
              <motion.div
                key={flight.flight}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="px-4 md:px-6 py-3 sm:py-4 hover:bg-background/5 transition-colors"
              >
                <div className="grid grid-cols-5 gap-2 md:gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-accent hidden md:block" />
                    {isInView && <FlipText text={flight.flight} baseDelay={500 + index * 200} />}
                  </div>
                  <div className="text-background font-serif text-sm md:text-base truncate">
                    {flight.destination}
                  </div>
                  <div className="text-background/80 font-mono text-sm truncate">
                    {flight.gate}
                  </div>
                  <div className="text-background font-mono text-sm md:text-base">
                    {flight.time}
                  </div>
                  <div className={`flex items-center gap-1 text-xs md:text-sm font-medium ${flight.statusColor}`}>
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="hidden lg:inline">{flight.status}</span>
                    <span className="lg:hidden">{flight.statusShort}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flights - Mobile */}
          <div className="sm:hidden divide-y divide-background/10">
            {flights.map((flight, index) => (
              <motion.div
                key={`mobile-${flight.flight}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="px-3 py-3"
              >
                <div className="grid grid-cols-4 gap-2 items-center">
                  <div className="text-background/90 font-mono text-xs">
                    {flight.flight}
                  </div>
                  <div className="text-background font-serif text-xs truncate">
                    {flight.destination}
                  </div>
                  <div className="text-background font-mono text-xs">
                    {flight.time}
                  </div>
                  <div className={`flex items-center justify-end gap-1 text-xs font-medium ${flight.statusColor}`}>
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Airport ambiance text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-6 sm:mt-8 text-background/60 text-xs sm:text-sm italic px-4"
        >
          "Les passagers du vol EB-2026 a destination de Lisbone sont invites a se presenter porte LOVE"
        </motion.p>
      </div>
    </section>
  )
}
