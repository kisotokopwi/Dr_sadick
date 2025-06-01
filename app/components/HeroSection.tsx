"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/255714695406?text=Hujambo, nataka kujua zaidi kuhusu fursa ya BF Suma", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-emerald">
      {/* Animated background elements - reduced opacity on mobile */}
      <div className="absolute inset-0 opacity-30 md:opacity-100">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Strong dark overlay for mobile text readability */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 relative z-20"
          >
            {/* Strong background for mobile text */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-3xl -m-6 p-6 backdrop-blur-sm"></div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
              style={{
                textShadow: "3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)",
                color: "#ffffff",
                fontWeight: "900",
              }}
            >
              {t("heroTitle")}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10 text-xl md:text-2xl lg:text-3xl text-gold font-black"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)",
                color: "#f9a825",
                fontWeight: "900",
              }}
            >
              {t("heroSubtitle")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10 text-lg md:text-xl leading-relaxed max-w-2xl font-bold"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)",
                color: "#ffffff",
                fontWeight: "700",
              }}
            >
              {t("heroDescription")}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="relative z-10 group bg-gold hover:bg-gold/90 text-navy font-black py-5 px-10 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-gold/50 flex items-center space-x-3 animate-pulse hover:animate-none border-2 border-gold"
            >
              <MessageCircle className="w-7 h-7" />
              <span className="font-black">{t("joinNow")}</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight className="w-7 h-7" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Dr. Sadick Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-emerald rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="/images/dr-sadick-formal.jpeg"
                alt="Dr. Sadick"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-gold/30"
              />
              {/* Professional badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                <span className="text-navy font-bold text-sm">Dr. Sadick</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
