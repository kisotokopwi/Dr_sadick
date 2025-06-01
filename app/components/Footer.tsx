"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+255 714 695 406",
      href: "https://wa.me/255714695406",
      color: "text-emerald",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@dr_sadick_msamvula",
      href: "https://instagram.com/dr_sadick_msamvula",
      color: "text-gold",
    },
  ]

  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gold mb-4">BF Suma</h3>
            <p className="text-white/80 leading-relaxed">
              Fursa ya kipekee ya kujenga biashara yako na kupata kipato cha ziada. Jiunge nasi leo na uanze safari yako
              ya mafanikio.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gold mb-4">{t("contact")}</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 hover:text-gold transition-colors"
                >
                  <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  <span className="text-white/90">{contact.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gold mb-4">{t("followUs")}</h4>
            <div className="flex space-x-4">
              {contactInfo.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-emerald hover:bg-gold rounded-2xl flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/70 text-sm mb-4">{t("footerDisclaimer")}</p>
          <p className="text-white/50 text-xs">© {new Date().getFullYear()} BF Suma Tanzania. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
