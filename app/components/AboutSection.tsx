"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { DollarSign, TrendingUp, Clock, GraduationCap } from "lucide-react"

export default function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: DollarSign,
      title: t("discountedPricing"),
      color: "text-emerald",
      bgColor: "bg-emerald/10",
    },
    {
      icon: TrendingUp,
      title: t("commissionIncome"),
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: Clock,
      title: t("partTimeStart"),
      color: "text-emerald",
      bgColor: "bg-emerald/10",
    },
    {
      icon: GraduationCap,
      title: t("comprehensiveTraining"),
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
  ]

  return (
    <section className="py-20 bg-navy/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">{t("aboutTitle")}</h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">{t("aboutDescription")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-navy/5"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-navy text-center leading-tight">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
