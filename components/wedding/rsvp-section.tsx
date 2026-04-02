"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Send, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslations } from "next-intl"

export function RSVPSection() {

  const t = useTranslations('Rsvp');
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attendance, setAttendance] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t('title')}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          <p><strong>{t('warning')}</strong></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-serif text-3xl text-foreground mb-4">{t('thankYou')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('confirmation')}<br />
               {t('seeYouSoon')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t('firstName')}</Label>
                  <Input
                    id="firstName"
                    placeholder={t('placeholderFirstName')}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('lastName')}</Label>
                  <Input
                    id="lastName"
                    placeholder={t('placeholderLastName')}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('placeholderEmail')}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-4">
                <Label>{t('attendance')}</Label>
                <RadioGroup value={attendance} onValueChange={setAttendance} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="cursor-pointer font-normal">
                      {t('willAttend')}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="cursor-pointer font-normal">
                      {t('wontAttend')}
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {attendance === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="guests">{t('guests')}</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="0"
                      max="5"
                      defaultValue="0"
                      className="bg-background w-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary">{t('dietary')}</Label>
                    <Input
                      id="dietary"
                      placeholder={t('placeholderDietary')}
                      className="bg-background"
                    />
                  </div>
                </motion.div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">{t('message')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('placeholderMessage')}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                {t('submit')}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
