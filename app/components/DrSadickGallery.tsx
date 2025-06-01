"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DrSadickGallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/images/dr-sadick-formal.jpeg",
      alt: "Dr. Sadick - Professional Portrait",
      caption: "Dr. Sadick in Professional Attire",
    },
    {
      src: "/images/dr-sadick-casual.jpeg",
      alt: "Dr. Sadick - Casual Look",
      caption: "Dr. Sadick - Graduate with Plan B in Mind",
    },
    {
      src: "/images/dr-sadick-professional.jpeg",
      alt: "Dr. Sadick - Business Professional",
      caption: "Dr. Sadick - Business Leader",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
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
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Meet Dr. Sadick</h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Your mentor and guide to financial success through BF Suma
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-navy" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-navy" />
              </button>
            </motion.div>

            {/* Caption */}
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-navy mb-2">{images[currentImage].caption}</h3>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-gold" : "bg-navy/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
