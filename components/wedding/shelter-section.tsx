"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { UserCheck, Luggage, Ticket, ArrowRight, ArrowDown, Sparkles, StarIcon, Hotel } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"



export function ShelterSection() {

  const t = useTranslations('Shelter');

  const shelterSteps = [
  {
    step: 1.1,
    icon: Hotel,
    siteweb: "https://www.marpuro.pt/pt",
    title: "Mar Puro Hotel",
    rue: "Rua Alto da Cabrita 2640-054",
    province: "Santo Isidoro - Mafra - Portugal",
    temps: t('temps1'),
  },
  {
    step: 5.5,
    icon: Hotel,
    siteweb: "https://immerso.pt/fr/chambres/ ",
    title: "Immerso Hotel",
    rue: "Rua Bica da Figueira",
    province: "Santo Isisdoro - Portugal",
    temps: t('temps2'),
  },
  {
    step: 6.1,
    icon: Hotel,
    siteweb: "https://selina.pt/villa/selina-ericeira",
    title: "Selina Boavista Ericeira",
    rue: "Estrada de Mafra, 2655-302",
    province: "Ericeira - Portugal",
    temps: t('temps2'),
  },
  {
    step: 5,
    icon: Hotel,
    siteweb: "https://www.quintadarelva.com/",
    title: "Quinta da Relva - Soulfull House",
    rue: "Rua Chãos da Relva",
    province: "Mafra - Portugal",
    temps: t('temps4'),
  },
  {
    step: 6.9,
    icon: Hotel,
    siteweb: "https://www.vilagale.com/fr/hotels/cote-de-lisbonne/vila-gale-ericeira",
    title: "Vila Galé Ericeira",
    rue: "Largo dos Navegantes 2655-320",
    province: "Ericeira - Portugal",
    temps: t('temps5'),
  },
  {
    step: 10,
    icon: Hotel,
    siteweb: "https://www.aethos.com/destinations/ericeira?p=base&c=property-select&lg=fr-FR",
    title: "Aethos Ericeira",
    rue: "Rua da Estalagem",
    province: "Encarnaçao - Portugal",
    temps: t('temps6'),
  },
]

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
            <span className="text-xs sm:text-sm tracking-wider uppercase text-accent">{t('title')}</span>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {shelterSteps.map((step, index) => (
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
                        {t('distance')} {step.step} km
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl text-foreground mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.rue}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.province}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.temps}</p>
                      <a
                        href={step.siteweb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm text-accent hover:underline"
                      >
                        {t('visit')} <ArrowRight className="w-4 h-4 inline-block" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 mb-10 sm:mb-16"
        >
          <div className="bg-primary rounded-xl p-4 sm:p-6 md:p-8 max-w-2xl mx-auto">

            <div className="bg-background/10 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-primary-foreground/80 text-sm sm:text-base">{t('donationInfo')}</p>
              <p  className="text-primary-foreground/80 text-sm sm:text-base"><strong>IBAN :</strong> FR76 3000 3034 8000 0506 4263 04</p>
              <p className="text-primary-foreground/80 text-sm sm:text-base"><strong>SWIFT / BIC:</strong> SOGEFRPP</p>
              <p className="text-primary-foreground/80 text-sm sm:text-base"><strong>{t('owner')}:</strong> Mr Daha Ou Garnacho Da Cruz Lima</p><br />
              <p className="text-primary-foreground/80 text-sm sm:text-base"><strong>{t('thanks')}</strong></p>
            </div>
            
          </div>
        </motion.div>
      
    </section>

  )
}
