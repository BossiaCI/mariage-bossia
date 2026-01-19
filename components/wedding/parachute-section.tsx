"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ParachuteSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-secondary/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Notre Arrivée
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Un Atterrissage Spectaculaire
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comme notre amour qui nous fait planer, nous descendrons ensemble vers notre nouvelle vie
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <Image
                src="/images/parachute-couple.jpg"
                alt="Edénia et Bossia descendant en parachute d'un jet privé"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>

            {/* Decorative frame corners */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/60 rounded-tl-lg" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent/60 rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent/60 rounded-bl-lg" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/60 rounded-br-lg" />
          </motion.div>

          {/* Floating quote card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-4 md:right-8 lg:-right-12 bg-card p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs"
          >
            <svg
              className="w-8 h-8 text-accent/60 mb-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-foreground italic leading-relaxed">
              L'amour nous donne des ailes, mais c'est ensemble que nous choisissons où atterrir.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-px bg-accent/50" />
              <span className="text-sm text-muted-foreground font-medium">E & B</span>
            </div>
          </motion.div>

          {/* Floating cloud decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute -top-6 left-1/4 hidden md:block"
          >
            <svg className="w-20 h-12 text-accent/20" viewBox="0 0 100 60" fill="currentColor">
              <ellipse cx="30" cy="40" rx="25" ry="15" />
              <ellipse cx="55" cy="35" rx="20" ry="12" />
              <ellipse cx="75" cy="40" rx="18" ry="13" />
              <ellipse cx="45" cy="45" rx="22" ry="10" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Prêts pour le grand saut
          </p>
        </motion.div>
      </div>
    </section>
  )
}
