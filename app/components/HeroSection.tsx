"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
import { useMemo } from "react"

// Deterministic PRNG to avoid SSR/CSR mismatches
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Dot = {
  left: number
  top: number
  dx: number
  dy: number
  duration: number
  delay: number
}

export default function HeroSection() {
  const { t } = useLanguage()

  // Precompute stable positions/animation seeds for dots (SSR == CSR)
  const dots: Dot[] = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const r = mulberry32(12345 + i * 9973)
      const left = r() * 100
      const top = r() * 100
      const dx = r() * 200 - 100
      const dy = r() * 200 - 100
      const duration = 6 + r() * 4
      const delay = i * 0.3
      return { left, top, dx, dy, duration, delay }
    })
  }, [])

  const scrollToVideo = () => {
    const videoSection = document.querySelector("#video-section")
    if (videoSection) {
      videoSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient background - similar to CTA section */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-emerald"></div>

      {/* Animated dots background (deterministic to avoid hydration mismatches) */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((d: Dot, i: number) => (
          <motion.div
            key={`hero-dot-${i}`}
            className="absolute w-2 h-2 bg-gold rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: [0, d.dx, 0],
              y: [0, d.dy, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: d.duration,
              repeat: Infinity,
              delay: d.delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
            }}
          />
        ))}

        {/* Additional sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hero-sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
            }}
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 relative z-20">
            {/* Solid background container for text */}
            <div className="bg-navy/90 backdrop-blur-sm border-l-4 border-gold p-8 rounded-2xl shadow-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {t("heroTitle")}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gold mb-8"
                style={{
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {t("heroSubtitle")}
              </motion.h2>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToVideo}
                className="bg-gold hover:bg-gold/90 text-navy font-extrabold py-5 px-10 rounded-xl text-xl transition-all duration-300 shadow-2xl hover:shadow-gold/50 flex items-center space-x-3 border-2 border-gold/50"
              >
                <Play className="w-7 h-7" />
                <span>{t("language") === "sw" ? "Tazama Video ya Mr. Sadick" : "Watch Mr. Sadick's Video"}</span>
                <ArrowRight className="w-7 h-7 ml-2" />
              </motion.button>
            </div>
          </div>

          {/* Mr. Sadick Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-emerald rounded-2xl transform rotate-3 opacity-30"></div>
              <img
                src="/images/dr-sadick-formal.jpeg"
                alt="Mr. Sadick"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-gold/30"
              />
              {/* Professional badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                <span className="text-navy font-bold text-sm">Mr. Sadick</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
