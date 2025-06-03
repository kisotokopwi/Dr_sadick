"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { Play, X, Car, Plane, TrendingUp } from "lucide-react"

interface VideoTestimonial {
  id: string
  name: string
  location: string
  thumbnail: string
  videoUrl: string
  title: string
  comment: string
  category: "safari" | "gari" | "biashara"
}

export default function VideoTestimonialsSection() {
  const { t, language } = useLanguage()
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Video testimonials data with placeholders for easy replacement
  const videoTestimonials: VideoTestimonial[] = [
    // SAFARI Category
    {
      id: "safari-1",
      name: "Mariam Juma",
      location: "Mwanza",
      thumbnail: "/safari1.png?height=400&width=600&text=Dubai+Safari+Winner",
      videoUrl: "/videos/testimonials/SafariParachute.mp4",
      title: language === "sw" ? "Safari ya Dubai" : "Dubai Trip Winner",
      comment:
        language === "sw"
          ? "Niliuza bidhaa za BF Suma kwa miezi mitatu tu, nikashinda safari ya Dubai! Haikuwa ndoto, ni ukweli. Dr. Sadick alikuwa sahihi - kazi ngumu inalipa."
          : "I sold BF Suma products for just three months and won a Dubai trip! It wasn't a dream, it's reality. Dr. Sadick was right - hard work pays.",
      category: "safari",
    },
    {
      id: "safari-2",
      name: "Dr.Ibrahim Chenza",
      location: "Dar es Salaam",
      thumbnail: "/images/testimonials/drChenza.jpeg",
      videoUrl: "/videos/testimonials/SafariSingapore.mp4",
      title: language === "sw" ? "Safari ya Singapore" : "Singapore Trip Winner",
      comment:
        language === "sw"
          ? "Turkey ilikuwa ndoto yangu tangu utotoni. BF Suma ilinifanya ndoto yangu ikuwa ukweli. Familia yangu na mimi tulisafiri kwa mara ya kwanza nje ya Afrika!"
          : "Turkey was my childhood dream. BF Suma made my dream come true. My family and I traveled outside Africa for the first time!",
      category: "safari",
    },
    // GARI Category
    {
      id: "gari-1",
      name: "Abdul Ramadhani",
      location: "Arusha",
      thumbnail: "/images/testimonials/carWinnerthumbnail1.jpeg",
      videoUrl: "/videos/testimonials/magariWinner1.mp4",
      title: language === "sw" ? "Nilipata Gari Langu" : "I Got My Car",
      comment:
        language === "sw"
          ? "Miezi sita tu baada ya kujiunga na timu ya Dr. Sadick, nikapewa gari hili kama zawadi ya utendaji wangu. Sasa nina gari langu mwenyewe!"
          : "Just six months after joining Dr. Sadick's team, I was given this car as a performance reward. Now I have my own car!",
      category: "gari",
    },
    {
      id: "gari-2",
      name: "Neema Ally",
      location: "Mbeya",
      thumbnail: "/images/testimonials/carWinnerthumbnail2.jpeg",
      videoUrl: "/videos/testimonials/magariWinner1.mp4",
      title: language === "sw" ? "Gari la Pili" : "Second Car Winner",
      comment:
        language === "sw"
          ? "Hii ni gari langu la pili kutoka BF Suma! Mwaka wa kwanza nilipata gari la kwanza, mwaka wa pili gari la pili. Mafanikio yanazidi kuongezeka!"
          : "This is my second car from BF Suma! First year I got the first car, second year the second car. Success keeps growing!",
      category: "gari",
    },
    // BIASHARA Category
    {
      id: "biashara-1",
      name: "Fatuma Hassan",
      location: "Dodoma",
      thumbnail: "/biashara1.png?height=400&width=600&text=Business+Success+Story",
      videoUrl: "/videos/testimonials/biashara-success-1.mp4",
      title: language === "sw" ? "Biashara Inayofaa" : "Profitable Business",
      comment:
        language === "sw"
          ? "Kila siku nauza bidhaa za BF Suma na naingiza shilingi laki moja hadi tatu. Biashara hii imenibadilisha kutoka mfanyakazi hadi mwajiri!"
          : "Every day I sell BF Suma products and earn one to three lakhs. This business changed me from employee to employer!",
      category: "biashara",
    },
    {
      id: "biashara-2",
      name: "Mohamed Salim",
      location: "Moshi",
      thumbnail: "/biashara3.png?height=400&width=600&text=Daily+Sales+Success",
      videoUrl: "/videos/testimonials/biashara-success-2.mp4",
      title: language === "sw" ? "Mauzo ya Kila Siku" : "Daily Sales Success",
      comment:
        language === "sw"
          ? "Sijawahi kuona biashara kama hii! Kila siku nina mauzo, kila wiki nina faida. BF Suma imekuwa chanzo changu kikuu cha kipato."
          : "I've never seen a business like this! Every day I have sales, every week I have profit. BF Suma has become my main source of income.",
      category: "biashara",
    },
  ]

  const categories = [
    {
      id: "safari",
      title: language === "sw" ? "🚀 SAFARI" : "🚀 TRAVEL REWARDS",
      subtitle: language === "sw" ? "Washindi wa Safari za Kimataifa" : "International Travel Winners",
      icon: Plane,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "gari",
      title: language === "sw" ? "🚗 MAGARI" : "🚗 CAR REWARDS",
      subtitle: language === "sw" ? "Washindi wa Magari" : "Car Winners",
      icon: Car,
      color: "from-emerald-500 to-green-500",
    },
    {
      id: "biashara",
      title: language === "sw" ? "💼 BIASHARA" : "💼 BUSINESS SUCCESS",
      subtitle: language === "sw" ? "Mafanikio ya Biashara ya Kila Siku" : "Daily Business Success Stories",
      icon: TrendingUp,
      color: "from-gold to-yellow-500",
    },
  ]

  const openModal = (video: VideoTestimonial) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) closeModal()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [])

  const getVideosByCategory = (categoryId: string) => {
    return videoTestimonials.filter((video) => video.category === categoryId)
  }

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
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
            {language === "sw" ? "Ushuhuda wa Video" : "Video Testimonials"}
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            {language === "sw"
              ? "Sikiliza hadithi za mafanikio kutoka kwa wanachama wetu waliofanikiwa"
              : "Listen to success stories from our successful members"}
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center space-x-3 bg-gradient-to-r ${category.color} text-white px-8 py-4 rounded-2xl shadow-lg mb-4`}
              >
                <category.icon className="w-7 h-7" />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <p className="text-navy/70 text-lg">{category.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {getVideosByCategory(category.id).map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => openModal(video)}
                >
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    >
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={`${video.name} testimonial`}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-gold/50 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 text-navy ml-1" />
                        </motion.div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h4 className="text-white text-xl font-bold mb-2">{video.title}</h4>
                        <div className="flex items-center text-white/90 text-sm">
                          <span className="font-medium">{video.name}</span>
                          <span className="mx-2">•</span>
                          <span>{video.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-2xl p-6 shadow-md group-hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-lg">{video.name.charAt(0)}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h5 className="font-semibold text-navy">{video.name}</h5>
                          <span className="text-navy/60 text-sm ml-2">• {video.location}</span>
                        </div>
                        <p className="text-navy/80 leading-relaxed italic">"{video.comment}"</p>

                        <button className="mt-4 inline-flex items-center space-x-2 bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300">
                          <Play className="w-4 h-4" />
                          <span>{language === "sw" ? "Tazama Video" : "Watch Video"}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {isModalOpen && selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="aspect-video">
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full"
                    aria-label={`${selectedVideo.name} testimonial video`}
                  >
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-navy mb-3">{selectedVideo.title}</h3>
                  <div className="flex items-center text-navy/60 mb-4">
                    <span className="font-medium text-lg">{selectedVideo.name}</span>
                    <span className="mx-3">•</span>
                    <span className="text-lg">{selectedVideo.location}</span>
                  </div>
                  <p className="text-navy/80 text-lg leading-relaxed italic">"{selectedVideo.comment}"</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
