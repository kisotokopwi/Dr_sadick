"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "sw" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  sw: {
    // Hero Section
    heroTitle: "Je, Una Mtaji Mdogo Na Hujui Ufanye Biashara Gani?",
    heroSubtitle: "Jiunge na BF Suma na uanze safari yako ya mafanikio leo hii",
    heroDescription:
      "Fursa ya kipekee ya kujenga biashara yako na kupata kipato cha ziada. Hakuna uzoefu unaohitajika - tunakufundisha kila kitu!",
    joinNow: "Jiunge Sasa",

    // Video Section
    videoTitle: "Tazama Video ya Dr. Sadick Akielezea Fursa ya BF Suma",
    videoDescription: "Jifunze jinsi unavyoweza kubadilisha maisha yako kupitia biashara hii ya BF Suma",

    // About Section
    aboutTitle: "Kuhusu Fursa ya BF Suma",
    aboutDescription:
      "BF Suma ni kampuni ya kimataifa inayotoa bidhaa za afya na urembo. Tunatoa fursa ya biashara kwa watu wote wenye nia ya kujitegemea.",
    discountedPricing: "Ununuzi wa bidhaa kwa bei ya punguzo",
    commissionIncome: "Kipato kutokana na kamisheni",
    partTimeStart: "Unaweza kuanza kwa muda wa ziada",
    comprehensiveTraining: "Mafunzo ya kina kutoka kwa Dr. Sadick",

    // Why Join
    whyJoinTitle: "Kwa Nini Ujiunge Nasi?",
    noExperience: "Hakuna uhitaji wa uzoefu mkubwa",
    financialFreedom: "Ukombozi wa kifedha",
    supportiveCommunity: "Kuwa sehemu ya jamii inayosaidiana",
    expertTraining: "Mafunzo ya kina kutoka kwa waliobobea",

    // Testimonials
    testimonialsTitle: "Hadithi za Mafanikio",

    // About Dr. Sadick
    aboutDrSadickTitle: "Kuhusu Dr. Sadick",
    aboutDrSadickDescription:
      "Dr. Sadick ni kiongozi maarufu katika sekta ya biashara za mlolongo. Ana uzoefu wa miaka mingi na amewasaidia watu wengi kufikia malengo yao ya kifedha. Ni daktari mzuri na mwongozi wa biashara aliyefanikiwa.",
    learnFromDrSadick: "Jifunze Kutoka Kwa Dr. Sadick",

    // CTA
    ctaTitle: "Usikose Fursa Hii – Bonyeza Hapa Uanze Safari Yako Ya Mafanikio",
    ctaDescription: "Jiunge na maelfu ya watu waliobadilisha maisha yao kupitia BF Suma",
    joinCounter: "Zaidi ya 200 Wamejiunga Wiki Hii!",

    // FAQ
    faqTitle: "Maswali Yanayoulizwa Mara Kwa Mara",
    faq1Q: "Je, nahitaji kuwa na uzoefu wa awali kujiunga?",
    faq1A: "Hapana, mafunzo yanatolewa kwa kila mwanachama mpya.",
    faq2Q: "Nitapataje faida au kipato?",
    faq2A: "Unapata kwa kuuza bidhaa na kwa kujenga timu yako.",
    faq3Q: "Biashara hii ni halali?",
    faq3A: "Ndiyo, BF Suma ni kampuni halali yenye usajili wa kimataifa.",
    faq4Q: "Je, biashara hii inaweza kufanywa ukiwa mwanafunzi/mwajiriwa?",
    faq4A: "Ndiyo, unaweza kufanya kwa muda wako wa ziada.",

    // Footer
    footerDisclaimer: "Hii sio ajira, bali ni fursa ya biashara halali. Matokeo hutegemea juhudi zako.",
    contact: "Mawasiliano",
    followUs: "Tufuate",
  },
  en: {
    // Hero Section
    heroTitle: "Do You Have Small Capital And Don't Know What Business To Do?",
    heroSubtitle: "Join BF Suma and start your success journey today",
    heroDescription:
      "A unique opportunity to build your business and earn extra income. No experience required - we teach you everything!",
    joinNow: "Join Now",

    // Video Section
    videoTitle: "Watch Dr. Sadick Explain The BF Suma Opportunity",
    videoDescription: "Learn how you can transform your life through this BF Suma business",

    // About Section
    aboutTitle: "About BF Suma Opportunity",
    aboutDescription:
      "BF Suma is an international company offering health and beauty products. We provide business opportunities for everyone with the desire to be self-reliant.",
    discountedPricing: "Purchase products at discounted prices",
    commissionIncome: "Income from commissions",
    partTimeStart: "You can start part-time",
    comprehensiveTraining: "Comprehensive training from Dr. Sadick",

    // Why Join
    whyJoinTitle: "Why Join Us?",
    noExperience: "No prior experience required",
    financialFreedom: "Financial freedom",
    supportiveCommunity: "Be part of a supportive community",
    expertTraining: "Comprehensive training from experts",

    // Testimonials
    testimonialsTitle: "Success Stories",

    // About Dr. Sadick
    aboutDrSadickTitle: "About Dr. Sadick",
    aboutDrSadickDescription:
      "Dr. Sadick is a renowned leader in the network marketing industry. He has years of experience and has helped many people achieve their financial goals. He is a qualified doctor and successful business leader.",
    learnFromDrSadick: "Learn From Dr. Sadick",

    // CTA
    ctaTitle: "Don't Miss This Opportunity – Click Here To Start Your Success Journey",
    ctaDescription: "Join thousands of people who have transformed their lives through BF Suma",
    joinCounter: "Over 200 People Joined This Week!",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Do I need prior experience to join?",
    faq1A: "No, training is provided for every new member.",
    faq2Q: "How will I earn profit or income?",
    faq2A: "You earn by selling products and building your team.",
    faq3Q: "Is this business legal?",
    faq3A: "Yes, BF Suma is a legitimate company with international registration.",
    faq4Q: "Can this business be done while being a student/employee?",
    faq4A: "Yes, you can do it in your spare time.",

    // Footer
    footerDisclaimer: "This is not employment, but a legitimate business opportunity. Results depend on your efforts.",
    contact: "Contact",
    followUs: "Follow Us",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sw")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["sw"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
