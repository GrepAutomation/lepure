"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand mb-6">Meet Our Founders</h2>
          <p className="text-brand-dark max-w-2xl mx-auto text-lg">
            Bringing together their unique perspectives and shared vision for luxury
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg w-full max-w-[200px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/louie3.jpg-G7iq1ZlwEdwyPxGjgfIp7ZLnD6eEvF.jpeg"
                alt="Co-founder Louie Pecan"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-brand mb-1">Louie Pecan</h3>
              <p className="text-brand-dark text-sm">Creative Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg w-full max-w-[200px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4347.jpg%20(1)-IoRcIR4P54PXHLw1eiTFW3ptpJz2xq.jpeg"
                alt="Co-founder Chace Pina"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-brand mb-1">Chace Pina</h3>
              <p className="text-brand-dark text-sm">Brand Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg w-full max-w-[200px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16643-eSJXowIhtRqxTRLaCXAPVuiYMfqvYj.jpeg"
                alt="Co-founder Kalvin Gomes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-brand mb-1">Kalvin Gomes</h3>
              <p className="text-brand-dark text-sm">Design Director</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg w-full max-w-[200px] mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16641-QxC20rlWR44Q3hU6Ly6F5g5N6no51i.jpeg"
                alt="Co-founder Bari Ayin"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-brand mb-1">Bari Ayin</h3>
              <p className="text-brand-dark text-sm">Innovation Director</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-brand-dark max-w-3xl mx-auto text-lg leading-relaxed">
            United by their passion for refined aesthetics and commitment to excellence, our founders have come together
            to redefine modern luxury. Their diverse talents and shared dedication to craftsmanship have shaped Lé Pure
            into a beacon of sophisticated style and innovation.
          </p>
          <Button variant="outline" className="mt-8 border-brand text-brand hover:bg-brand hover:text-cream">
            Our Story
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

