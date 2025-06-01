"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Globe, ChevronDown } from "lucide-react"

export default function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  return (
    <>
      {/* Floating Language Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="relative">
          <motion.button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 shadow-2xl hover:bg-white/30 transition-all duration-300 group"
          >
            <div className="relative">
              <Globe className="w-6 h-6 text-white group-hover:text-gold transition-colors duration-300" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-2 border-gold/30 rounded-full"
              />
            </div>

            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-white font-semibold text-sm group-hover:text-gold transition-colors duration-300">
                {language === "sw" ? "🇹🇿 Kiswahili" : "🇬🇧 English"}
              </span>
              <motion.div animate={{ rotate: isLanguageOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-4 h-4 text-white group-hover:text-gold transition-colors duration-300" />
              </motion.div>
            </div>

            {/* Mobile version - just flags */}
            <div className="sm:hidden">
              <span className="text-2xl">{language === "sw" ? "🇹🇿" : "🇬🇧"}</span>
            </div>
          </motion.button>

          {/* Stylish Language Dropdown */}
          {isLanguageOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="absolute right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden min-w-[200px]"
            >
              <div className="p-2">
                <motion.button
                  onClick={() => {
                    setLanguage("sw")
                    setIsLanguageOpen(false)
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center space-x-3 ${
                    language === "sw"
                      ? "bg-gradient-to-r from-gold/20 to-emerald/20 text-navy font-bold shadow-md"
                      : "text-navy/80 hover:bg-navy/5"
                  }`}
                >
                  <span className="text-2xl">🇹🇿</span>
                  <div className="flex-1">
                    <div className="font-semibold">Kiswahili</div>
                    <div className="text-xs text-navy/60">Tanzania</div>
                  </div>
                  {language === "sw" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-gold rounded-full flex items-center justify-center"
                    >
                      <span className="text-navy text-xs font-bold">✓</span>
                    </motion.div>
                  )}
                </motion.button>

                <motion.button
                  onClick={() => {
                    setLanguage("en")
                    setIsLanguageOpen(false)
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center space-x-3 ${
                    language === "en"
                      ? "bg-gradient-to-r from-gold/20 to-emerald/20 text-navy font-bold shadow-md"
                      : "text-navy/80 hover:bg-navy/5"
                  }`}
                >
                  <span className="text-2xl">🇬🇧</span>
                  <div className="flex-1">
                    <div className="font-semibold">English</div>
                    <div className="text-xs text-navy/60">International</div>
                  </div>
                  {language === "en" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-gold rounded-full flex items-center justify-center"
                    >
                      <span className="text-navy text-xs font-bold">✓</span>
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Click outside to close dropdown */}
      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}
    </>
  )
}
