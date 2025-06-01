"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { CheckCircle, Lightbulb, Heart, Target } from "lucide-react"

export default function WhyJoinSection() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: CheckCircle,
      title: t("noExperience"),
      color: "text-emerald",
      bgColor: "bg-emerald/10",
    },
    {
      icon: Lightbulb,
      title: t("financialFreedom"),
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: Heart,
      title: t("supportiveCommunity"),
      color: "text-emerald",
      bgColor: "bg-emerald/10",
    },
    {
      icon: Target,
      title: t("expertTraining"),
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
  ]

  return (
    <section className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">{t("whyJoinTitle")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-6 p-6 rounded-2xl hover:bg-navy/5 transition-all duration-300"
            >
              <div className={`w-20 h-20 ${reason.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <reason.icon className={`w-10 h-10 ${reason.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-navy">{reason.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
