"use client"

import { motion } from "framer-motion"
import { Plane } from "lucide-react"
import { useTranslations } from "next-intl";

export function HeroSection() {

  const t = useTranslations('Hero');
  
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
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div className="">
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
                >
                Catarina Lima
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
                >
                & 
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
                >
                António Lima
              </motion.p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-accent italic">{t('and')}</span>
            </div>
            <div className="">
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
                >
                Adjorlolo Grâce  <br />{t('memory')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
                >
                & 
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
                >
                Daha Clément
              </motion.p>
            </div>
        </div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] text-muted-foreground mb-6"
        >
          {t('description')}
        </motion.p>

        <div className="grid grid-cols-3 gap-3 p-4 sm:gap-4 md:gap-5 mb-8 sm:mb-12">
            <div className="col-span-1 flex items-center justify-center">
                 <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="font-serif  sm:text-2xl text-6xl md:text-8xl lg:text-9xl font-medium text-foreground mb-4 text-balance"
                >
                  Edénia
              </motion.h1>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center gap-3 my-6"
              >
                {/* <span className="w-16 md:w-15 h-px bg-accent" /> */}
                {/* <span className="font-serif text-2xl md:text-3xl text-accent italic">&</span> */}
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-serif text-2xl md:text-3xl text-accent italic">&</span>
                  </div>
                {/* <span className="w-16 md:w-15 h-px bg-accent" /> */}
            </motion.div>
            <div className="col-span-1 flex items-center justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="font-serif  sm:text-2xl text-6xl md:text-8xl lg:text-9xl font-medium text-foreground mb-4 text-balance"
                >
                  Bossia
              </motion.h1>
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            {t('site_description')}
          </p>
          <p className="font-serif text-3xl md:text-4xl text-primary font-medium">
            {t('description_date')} <br />
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
          <span className="text-xs tracking-widest uppercase">{t('scroll_indicator')}</span>
          <div className="w-px h-8 bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
