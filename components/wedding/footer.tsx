"use client"

import { motion } from "framer-motion"
import { Globe2, Heart, Instagram, Mail } from "lucide-react"
import { useTranslations } from "next-intl";

export function Footer() {

  const t = useTranslations('Footer');
  
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-6">E & B</h2>
          <p className="text-lg opacity-80 mb-8 leading-relaxed">
            {t('footerMessage')}
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://bossia.fr"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Website"
            >
              <Globe2 className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/dr.edenialima/"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-60 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current" /> for our most beautiful day.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
