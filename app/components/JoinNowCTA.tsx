"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { MessageCircle, ArrowRight, Sparkles, Users } from "lucide-react"

export default function JoinNowCTA() {
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/255714695406?text=Hujambo, nataka kujua zaidi kuhusu fursa ya BF Suma", "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy/95 to-emerald relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-6"
          >
            <Sparkles className="w-full h-full text-gold" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t("ctaTitle")}</h2>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">{t("ctaDescription")}</p>

          {/* Join Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-8 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 mx-auto w-fit"
          >
            <Users className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">{t("joinCounter")}</span>
          </motion.div>

          <motion.button
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="group bg-gold hover:bg-gold/90 text-navy font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-gold/50 flex items-center space-x-4 mx-auto animate-pulse hover:animate-none"
          >
            <MessageCircle className="w-8 h-8" />
            <span>{t("joinNow")}</span>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowRight className="w-8 h-8" />
            </motion.div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-white/70 text-sm"
          >
            ✨ Jiunge na maelfu ya watu waliobadilisha maisha yao
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
