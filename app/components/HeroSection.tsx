"use client"
import { useLanguage } from "../contexts/LanguageContext"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/255714695406?text=Hujambo, nataka kujua zaidi kuhusu fursa ya BF Suma", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Solid background for maximum contrast */}
      <div className="absolute inset-0 bg-navy"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 relative z-20">
            {/* Solid background container for text */}
            <div className="bg-navy border-l-4 border-gold p-6 rounded-lg shadow-2xl">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                style={{
                  color: "white",
                  WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                }}
              >
                {t("heroTitle")}
              </h1>

              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gold mb-6"
                style={{
                  color: "#f9a825",
                  WebkitTextStroke: "0.5px rgba(0,0,0,0.3)",
                }}
              >
                {t("heroSubtitle")}
              </h2>

              <p className="text-xl md:text-2xl leading-relaxed text-white max-w-2xl font-bold mb-8">
                {t("heroDescription")}
              </p>

              <button
                onClick={handleWhatsAppClick}
                className="bg-gold hover:bg-gold/90 text-navy font-extrabold py-5 px-10 rounded-xl text-xl transition-all duration-300 shadow-2xl hover:shadow-gold/50 flex items-center space-x-3 border-2 border-gold/50"
              >
                <MessageCircle className="w-7 h-7" />
                <span>{t("joinNow")}</span>
                <ArrowRight className="w-7 h-7 ml-2" />
              </button>
            </div>
          </div>

          {/* Dr. Sadick Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-navy rounded-2xl transform rotate-3 opacity-20"></div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
