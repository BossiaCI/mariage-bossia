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

export function RSVPSection() {
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
            Confirmez votre présence
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 text-balance">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Merci de nous confirmer votre présence avant le 15 Juillet 2026
          </p>
          <p><strong>Nombre d’accompagnants (Assurez-vous qu'ils ont bien été invités par les mariés.)</strong></p>
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
              <h3 className="font-serif text-3xl text-foreground mb-4">Merci !</h3>
              <p className="text-muted-foreground leading-relaxed">
                Votre réponse a bien été enregistrée.<br />
                Nous avons hâte de vous retrouver !
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    placeholder="Votre prénom"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    placeholder="Votre nom"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-4">
                <Label>Serez-vous des nôtres ?</Label>
                <RadioGroup value={attendance} onValueChange={setAttendance} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="cursor-pointer font-normal">
                      Avec joie ! Je serai présent(e)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="cursor-pointer font-normal">
                      Malheureusement, je ne pourrai pas venir
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
                    <Label htmlFor="guests">Nombre d&apos;accompagnants</Label>
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
                    <Label htmlFor="dietary">Restrictions alimentaires</Label>
                    <Input
                      id="dietary"
                      placeholder="Végétarien, allergies, etc."
                      className="bg-background"
                    />
                  </div>
                </motion.div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">Un petit mot pour les mariés</Label>
                <Textarea
                  id="message"
                  placeholder="Partagez vos vœux, une anecdote, ou simplement votre enthousiasme..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Envoyer ma réponse
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
