"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe } from "lucide-react"

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-navy/10 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="text-2xl font-bold text-navy" whileHover={{ scale: 1.05 }}>
            BF Suma
          </motion.div>

          {/* Language Toggle - With world emoji and current flag */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 p-3 rounded-full hover:bg-navy/10 transition-all duration-300"
            >
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-navy" />
                <span className="text-lg ml-1">{language === "sw" ? "🇹🇿" : "🇬🇧"}</span>
              </div>
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="absolute right-0 mt-2 bg-white rounded-2xl shadow-xl border border-navy/10 overflow-hidden min-w-[180px]"
              >
                <button
                  onClick={() => {
                    setLanguage("sw")
                    setIsLanguageOpen(false)
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-navy/5 transition-all flex items-center space-x-3 ${
                    language === "sw" ? "bg-navy/10 text-navy font-semibold" : "text-gray-700"
                  }`}
                >
                  <span className="text-lg">🇹🇿</span>
                  <span>Kiswahili</span>
                  {language === "sw" && <span className="ml-auto text-navy">✓</span>}
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setIsLanguageOpen(false)
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-navy/5 transition-all flex items-center space-x-3 ${
                    language === "en" ? "bg-navy/10 text-navy font-semibold" : "text-gray-700"
                  }`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span>English</span>
                  {language === "en" && <span className="ml-auto text-navy">✓</span>}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isLanguageOpen && <div className="fixed inset-0 z-[-1]" onClick={() => setIsLanguageOpen(false)} />}
    </motion.header>
  )
}
