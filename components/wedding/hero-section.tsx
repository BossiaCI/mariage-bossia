"use client"

import { motion } from "framer-motion"
import { Plane } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl"
        />
      </div>

      {/* Flying plane animation */}
      <motion.div
        initial={{ x: -100, y: 50, opacity: 0 }}
        animate={{ x: "100vw", y: -50, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 5 }}
        className="absolute top-32 text-accent"
      >
        <Plane className="w-8 h-8 rotate-[-20deg]" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Embarquez pour notre plus beau voyage
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-foreground mb-4 text-balance"
        >
          Edénia
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 my-6"
        >
          <span className="w-16 md:w-24 h-px bg-accent" />
          <span className="font-serif text-2xl md:text-3xl text-accent italic">&</span>
          <span className="w-16 md:w-24 h-px bg-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-foreground mb-12 text-balance"
        >
          Bossia
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Nous avons le plaisir de vous convier à notre mariage
          </p>
          <p className="font-serif text-3xl md:text-4xl text-primary font-medium">
            26 Septembre 2026
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Découvrir</span>
          <div className="w-px h-8 bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
