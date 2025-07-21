"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

export default function VideoSection() {
  const { t } = useLanguage()

  return (
    <section id="video-section" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">{t("videoTitle")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-navy to-emerald rounded-2xl p-8 shadow-2xl">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group cursor-pointer">
              {/* Real YouTube Video Embed */}
              <iframe
                src="https://www.youtube.com/embed/81e6HMGx9rM"
                title="Mr. Sadick - BIASHARA INAVYOLIPA SANA"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Mr. Sadick - BIASHARA INAVYOLIPA SANA</h3>
              <p className="text-white/80">Discover the opportunity that's changing lives across Tanzania</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
