"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const { language } = useLanguage()
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)

  // Investment options in TSh
  const investmentOptions = ["495,000", "395,000", "295,000", "195,000", "165,000"]

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleWhatsAppRedirect = () => {
    if (!selectedAmount) return

    const message =
      language === "sw"
        ? `Nataka kujiunga na BF Suma nikiwa na mtaji wa Tsh ${selectedAmount}, tafadhali nisaidie kuanza`
        : `I want to join BF Suma with a capital of Tsh ${selectedAmount}, please help me get started`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/255714695406?text=${encodedMessage}`, "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <h3 className="text-xl font-bold">
                {language === "sw" ? "Chagua Mtaji wa Kuanzia" : "Select Starting Investment"}
              </h3>
              <p className="text-white/80 text-sm mt-2">
                {language === "sw"
                  ? "Chagua kiasi cha mtaji unaoweza kuanza nacho"
                  : "Choose the investment amount you can start with"}
              </p>
            </div>

            {/* Investment Options */}
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {investmentOptions.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      selectedAmount === amount
                        ? "border-gold bg-gold/10 shadow-md"
                        : "border-gray-200 hover:border-navy/30"
                    }`}
                  >
                    <span className="font-medium text-navy">Tsh {amount}</span>
                    {selectedAmount === amount && <CheckCircle className="w-5 h-5 text-gold" />}
                  </button>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={handleWhatsAppRedirect}
                disabled={!selectedAmount}
                className={`w-full py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all ${
                  selectedAmount
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Send className={`w-5 h-5 ${selectedAmount ? "text-white" : "text-gray-500"}`} />
                <span>{language === "sw" ? "Tuma kwa WhatsApp" : "Send to WhatsApp"}</span>
              </button>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
              {language === "sw"
                ? "Utawasiliana moja kwa moja na Mr. Sadick"
                : "You will be connected directly with Mr. Sadick"}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
