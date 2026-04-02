"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LocaleSwitcher from "./LocaleSwitcher"
import { useTranslations } from "next-intl"



export function Navigation() {
  const t = useTranslations('Navigation');
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
  { label: t('home'), href: "#accueil" },
  { label: t('story'), href: "#histoire" },
  { label: t('travel'), href: "#voyage" },
  { label: t('schedule'), href: "#programme" },
  { label: t('rsvp'), href: "#rsvp" },
]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#accueil" className="font-serif text-2xl text-primary">
            E & B
          </a>

          <LocaleSwitcher />

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4">
                <span className="font-serif text-2xl text-primary">E & B</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl text-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
