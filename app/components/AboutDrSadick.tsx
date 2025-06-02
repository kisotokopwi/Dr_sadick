"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Award, Users, TrendingUp, Star } from "lucide-react"

export default function AboutDrSadick() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      color: "text-emerald",
      bgColor: "bg-emerald/10",
    },
    {
      icon: Users,
      number: "1000+",
      label: "People Trained",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      color: "text-emerald",
      bgColor: "bg-emerald/10",
    },
  ]

  return (
    <section className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-emerald rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="/images/dr-sadick-professional.jpeg"
                alt="Mr. Sadick"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-gold/30"
              />
              {/* Professional badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-gold fill-current" />
                  <span className="text-navy font-bold text-sm">Mr. Sadick</span>
                </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-navy">About Mr. Sadick</h2>

            <p className="text-lg text-navy/70 leading-relaxed">
              Mr. Sadick is a renowned leader in the network marketing industry. He has years of experience and has
              helped many people achieve their financial goals. He is a qualified professional and successful business
              leader.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-navy">{stat.number}</p>
                  <p className="text-sm text-navy/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy hover:bg-navy/90 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn From Mr. Sadick
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
