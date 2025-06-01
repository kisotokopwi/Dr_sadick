"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Menu, X, Globe } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-navy/5 rounded-2xl p-2">
              <Globe className="w-4 h-4 text-navy" />
              <button
                onClick={() => setLanguage("sw")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  language === "sw" ? "bg-navy text-white shadow-lg" : "text-navy hover:bg-navy/10"
                }`}
              >
                🇹🇿 Kiswahili
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  language === "en" ? "bg-navy text-white shadow-lg" : "text-navy hover:bg-navy/10"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-navy/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 p-4 bg-white rounded-2xl shadow-lg border border-navy/10"
          >
            <div className="flex items-center justify-center space-x-2">
              <Globe className="w-4 h-4 text-navy" />
              <button
                onClick={() => setLanguage("sw")}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  language === "sw" ? "bg-navy text-white" : "text-navy hover:bg-navy/10"
                }`}
              >
                🇹🇿 Kiswahili
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  language === "en" ? "bg-navy text-white" : "text-navy hover:bg-navy/10"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
