"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Star } from "lucide-react"

export default function SuccessStories() {
  const { t, language } = useLanguage()

  const stories = [
    {
      name: "Neema Mwalimu",
      location: "Arusha",
      image: "/placeholder.svg?height=100&width=100&text=Neema",
      testimonial:
        language === "sw"
          ? "BF Suma imebadilisha maisha yangu. Sasa nina kipato cha ziada kinachoniwezesha kusaidia familia yangu."
          : "BF Suma has changed my life. Now I have extra income that helps me support my family.",
      rating: 5,
    },
    {
      name: "John Mwangi",
      location: "Dar es Salaam",
      image: "/placeholder.svg?height=100&width=100&text=John",
      testimonial:
        language === "sw"
          ? "Mafunzo ya Dr. Sadick yalinisaidia sana. Sasa nina biashara yangu mwenyewe."
          : "Dr. Sadick's training helped me a lot. Now I have my own business.",
      rating: 5,
    },
    {
      name: "Fatuma Hassan",
      location: "Mwanza",
      image: "/placeholder.svg?height=100&width=100&text=Fatuma",
      testimonial:
        language === "sw"
          ? "Nilijiunga na BF Suma mwaka jana na sasa nina timu kubwa ya wanachama."
          : "I joined BF Suma last year and now I have a large team of members.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">{t("successTitle")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-charcoal">{story.name}</h3>
                  <p className="text-gray-600 text-sm">{story.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic">"{story.testimonial}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
