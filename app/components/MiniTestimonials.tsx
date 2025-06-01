"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Star, Quote } from "lucide-react"

export default function MiniTestimonials() {
  const { language } = useLanguage()

  const miniTestimonials = [
    {
      name: "Grace Mwangi",
      location: "Nairobi",
      image: "/placeholder.svg?height=60&width=60&text=Grace",
      quote:
        language === "sw"
          ? "Video za ushuhuda zilinisaidia kuamua. Niliona magari na safari, nikasema 'kwa nini si mimi?' Sasa mimi pia nina hadithi yangu ya mafanikio!"
          : "The testimonial videos helped me decide. I saw the cars and trips, said 'why not me?' Now I also have my success story!",
      rating: 5,
    },
    {
      name: "Peter Kimani",
      location: "Mombasa",
      image: "/placeholder.svg?height=60&width=60&text=Peter",
      quote:
        language === "sw"
          ? "Baada ya kuona video za wenzangu wakipata magari na safari, niliamua kujiunga. Leo nina gari langu mwenyewe!"
          : "After seeing videos of others getting cars and trips, I decided to join. Today I have my own car!",
      rating: 5,
    },
    {
      name: "Amina Said",
      location: "Zanzibar",
      image: "/placeholder.svg?height=60&width=60&text=Amina",
      quote:
        language === "sw"
          ? "Video za ushuhuda na mafunzo ya Dr. Sadick vilinitia moyo. Sasa nina biashara yangu inayofaa!"
          : "The testimonial videos and Dr. Sadick's training encouraged me. Now I have my own profitable business!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-warm-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            {language === "sw" ? "Maoni ya Haraka" : "Quick Reviews"}
          </h3>
          <p className="text-navy/70">
            {language === "sw"
              ? "Maoni kutoka kwa watu waliojiunga baada ya kuona video za ushuhuda"
              : "Reviews from people who joined after watching testimonial videos"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {miniTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-navy/5"
            >
              <Quote className="w-8 h-8 text-gold/40 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              <p className="text-navy/80 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gold/20"
                />
                <div>
                  <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                  <p className="text-navy/60 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
