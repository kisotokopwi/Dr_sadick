"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const { t, language } = useLanguage()

  const testimonials = [
    {
      name: "Asha",
      location: "Mwanza",
      image: "/placeholder.svg?height=100&width=100&text=Asha",
      testimonial:
        language === "sw"
          ? "BF Suma imebadilisha maisha yangu kabisa. Sasa nina kipato cha kutosha na nina uhuru wa kifedha."
          : "BF Suma has completely changed my life. Now I have sufficient income and financial freedom.",
      rating: 5,
    },
    {
      name: "John",
      location: "Dar es Salaam",
      image: "/placeholder.svg?height=100&width=100&text=John",
      testimonial:
        language === "sw"
          ? "Baada ya kuona video ya Dr. Sadick 'BIASHARA INAVYOLIPA SANA', niliamua kujiunga. Sasa nina biashara yangu mwenyewe!"
          : "After watching Dr. Sadick's video 'BIASHARA INAVYOLIPA SANA', I decided to join. Now I have my own business!",
      rating: 5,
    },
    {
      name: "Fatuma",
      location: "Arusha",
      image: "/placeholder.svg?height=100&width=100&text=Fatuma",
      testimonial:
        language === "sw"
          ? "Nilijiunga mwaka jana na sasa nina kipato cha kila mwezi. Asante Dr. Sadick!"
          : "I joined last year and now I have monthly income. Thank you Dr. Sadick!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-navy/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">{t("testimonialsTitle")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-navy/5 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/30 absolute top-4 right-4" />

              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gold/20"
                />
                <div>
                  <h3 className="font-semibold text-navy text-lg">{testimonial.name}</h3>
                  <p className="text-navy/60 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              <p className="text-navy/80 italic leading-relaxed">"{testimonial.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
