"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

export default function VideoSection() {
  const { t, language } = useLanguage()

  const highlights =
    language === "sw"
      ? [
          "Video yenye maelezo ya kina",
          "Mafanikio ya kweli kutoka Tanzania",
          "Hatua 3 rahisi za kuanza",
        ]
      : [
          "Deep dive into the opportunity",
          "Real success stories from Tanzania",
          "Three simple steps to start",
        ]

  const watchLabel = language === "sw" ? "Bonyeza Kuangalia Sasa" : "Watch Now"
  const watchers =
    language === "sw"
      ? "Watazamaji 2,400+ tayari wameona wiki hii"
      : "2,400+ people watched this week"

  const videoTitle = "Dr. Sadick - Opportunity Overview"

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
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-navy via-navy/90 to-emerald/85 text-white shadow-[0_55px_140px_rgba(8,30,49,0.45)]">
            <div className="absolute inset-x-12 -top-24 h-48 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -left-32 bottom-0 hidden h-80 w-80 rounded-full bg-emerald/30 blur-3xl md:block"></div>
            <div className="absolute -right-24 top-10 hidden h-[22rem] w-[22rem] rounded-full bg-white/10 blur-3xl lg:block"></div>

            <div className="relative grid items-center gap-14 px-6 py-14 sm:px-10 lg:grid-cols-[1.45fr,1fr] lg:px-16 lg:py-16">
              <div className="order-1">
                <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-black/80 shadow-[0_40px_90px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.01]">
                  <div className="aspect-[16/9] w-full">
                    {/* Real YouTube Video Embed */}
                    <iframe
                      src="https://www.youtube.com/embed/Qo9pZ0LlBic?si=DeSTHuAK081hXScT"
                      title={videoTitle}
                      className="h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10 opacity-70 transition-opacity duration-500 group-hover:opacity-40"></div>
                </div>
              </div>

              <div className="order-2 flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em]">
                  {language === "sw" ? "Fursa ya mara moja" : "Opportunity Spotlight"}
                </span>
                <p className="text-xl leading-relaxed text-white/85 sm:text-2xl">{t("videoDescription")}</p>

                <ul className="flex w-full flex-wrap justify-center gap-3 text-sm font-medium text-white/85 lg:justify-start">
                  {highlights.map((item) => (
                    <li key={item} className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <a
                    href="https://youtu.be/Qo9pZ0LlBic?si=DeSTHuAK081hXScT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-emerald shadow-xl transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald text-white">▶</span>
                    {watchLabel}
                  </a>
                  <p className="text-sm font-medium text-white/70">{watchers}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
