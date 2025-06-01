"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Award, Users, TrendingUp } from "lucide-react"

export default function AboutMrSadick() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-gold rounded-2xl transform rotate-3"></div>
              <img
                src="/placeholder.svg?height=500&width=400&text=Dr.+Sadick+Professional+Photo"
                alt="Dr. Sadick"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              {/* Professional badge overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-emerald-600 font-semibold text-sm">Dr. Sadick</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal">{t("aboutDrSadickTitle")}</h2>

            <p className="text-lg text-gray-600 leading-relaxed">{t("aboutDrSadickDescription")}</p>

            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-2xl font-bold text-charcoal">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-yellow-700" />
                </div>
                <p className="text-2xl font-bold text-charcoal">1000+</p>
                <p className="text-sm text-gray-600">People Trained</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-2xl font-bold text-charcoal">95%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              {t("learnFromDrSadick")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
