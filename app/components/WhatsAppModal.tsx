"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle, Banknote } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const { language } = useLanguage()
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)

  // Investment options in TSh
  const investmentOptions = [
    { amount: "495,000", label: "Premium Package" },
    { amount: "395,000", label: "Advanced Package" },
    { amount: "295,000", label: "Standard Package" },
    { amount: "195,000", label: "Basic Package" },
    { amount: "165,000", label: "Starter Package" },
  ]

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const handleWhatsAppRedirect = () => {
    if (!selectedAmount) return

    const message =
      language === "sw"
        ? `Nataka kujiunga na BF Suma nikiwa na mtaji wa Tsh ${selectedAmount}, tafadhali nisaidie kuanza`
        : `I want to join BF Suma with a capital of Tsh ${selectedAmount}, please help me get started`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/255692695406?text=${encodedMessage}`, "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-emerald text-white p-6 rounded-t-3xl relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex items-center space-x-3 mb-2">
                <Banknote className="w-8 h-8 text-gold" />
                <h3 className="text-2xl font-bold">
                  {language === "sw" ? "Chagua Mtaji Wako" : "Choose Your Investment"}
                </h3>
              </div>

              <p className="text-white/90 text-sm">
                {language === "sw"
                  ? "Chagua kiasi cha mtaji unachoweza kuanza nacho"
                  : "Select the investment amount you can start with"}
              </p>
            </div>

            {/* Investment Options - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {investmentOptions.map((option, index) => (
                  <motion.button
                    key={option.amount}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedAmount(option.amount)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 ${
                      selectedAmount === option.amount
                        ? "border-gold bg-gold/10 shadow-lg"
                        : "border-gray-200 hover:border-navy/30 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <div className="text-2xl font-bold text-navy">Tsh {option.amount}</div>
                        <div className="text-sm text-gray-600">{option.label}</div>
                      </div>

                      {selectedAmount === option.amount && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-8 h-8 bg-gold rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Fixed Footer with WhatsApp Button */}
            <div className="bg-white p-6 border-t border-gray-100 rounded-b-3xl">
              {/* WhatsApp Button - ALWAYS VISIBLE */}
              <button
                onClick={handleWhatsAppRedirect}
                disabled={!selectedAmount}
                className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 font-bold text-lg transition-all duration-300 ${
                  selectedAmount
                    ? "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Send className="w-6 h-6" />
                <span>{language === "sw" ? "Tuma kwa WhatsApp" : "Send to WhatsApp"}</span>
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                {language === "sw"
                  ? "Utawasiliana moja kwa moja na Mr. Sadick"
                  : "You will be connected directly with Mr. Sadick"}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
