"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand mb-6">The Collection</h2>
          <p className="text-brand-dark max-w-2xl mx-auto text-lg">
            Discover our latest pieces, where timeless elegance meets contemporary design
          </p>
        </motion.div>

        {/* Jewelry Collection */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center font-serif text-2xl md:text-3xl text-brand mb-12"
          >
            Jewelry Collection
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localhostagents_httpss.mj.runyOI2Sladki8_Necklace_jewelry_--c_d0615ec2-0f0c-46c7-86b0-489a29964aa8_2-f6a2kaFm96H6pdtmU81XYc8a654Xzo.png"
                  alt="Art Nouveau inspired necklace with emerald accents"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-serif text-xl mb-2">The Emerald Grace Necklace</h3>
                    <p className="text-sm">Art Nouveau inspired piece with emerald and crystal accents</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                  >
                    <Plus className="h-4 w-4 text-white" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-serif text-lg text-brand">The Emerald Grace Necklace</p>
                <p className="text-brand-dark">Limited Edition</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localhostagents_httpss.mj.runyOI2Sladki8_Necklace_jewelry_--c_1549d41b-c33d-4a52-b673-9c7000682a9a_1-wXkx7pU7oTbz2TuogzCql2dw1picj9.png"
                  alt="Golden Art Nouveau necklace with pearl accents"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="font-serif text-xl mb-2">The Golden Belle Necklace</h3>
                    <p className="text-sm">Vintage-inspired design with pearl and crystal embellishments</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                  >
                    <Plus className="h-4 w-4 text-white" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-serif text-lg text-brand">The Golden Belle Necklace</p>
                <p className="text-brand-dark">Signature Collection</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Existing Dress Collection */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-serif text-2xl md:text-3xl text-brand mb-12"
        >
          Dress Collection
        </motion.h3>

        {/* Rest of the existing dress collection items... */}
        {/* Previous dress collection grid remains unchanged */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-photo-of-a-couture-dress-design-for-le_h-tONHDETBy0xUOvctcb0A_nOTk0dHPQqezt1ft36QuVA-8gskzIfDArEelNInh5XUbaQ31zzM6O.png"
                alt="Leather bodice dress with lacing detail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-xl mb-2">The Corseted Evening Dress</h3>
                  <p className="text-sm">Artisanal leather craftsmanship meets modern silhouette</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                >
                  <Plus className="h-4 w-4 text-white" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-brand">The Corseted Evening Dress</p>
              <p className="text-brand-dark">Limited Edition</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-photo-of-a-couture-dress-design-for-le_oyWALyRLRy-Q06F1aZtq4Q_nOTk0dHPQqezt1ft36QuVA-3pPFkmEOvC4rYitWlz0GRCyiJCmbWe.png"
                alt="Minimalist dress with cape detail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-xl mb-2">The Architectural Cape Dress</h3>
                  <p className="text-sm">Modern lines with dramatic movement</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                >
                  <Plus className="h-4 w-4 text-white" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-brand">The Architectural Cape Dress</p>
              <p className="text-brand-dark">Signature Collection</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-photo-of-a-couture-dress-design-for-le_BB4lvz8nTqWi9gXxBr6e8g_nOTk0dHPQqezt1ft36QuVA-Kh7b8tFvaWJYePzlqCkY7lv5jCbN0i.png"
                alt="Bridal gown with sparkle overlay"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-xl mb-2">The Celestial Bridal Gown</h3>
                  <p className="text-sm">Ethereal elegance with crystalline details</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                >
                  <Plus className="h-4 w-4 text-white" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-brand">The Celestial Bridal Gown</p>
              <p className="text-brand-dark">Bridal Collection</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-photo-of-a-couture-dress-design-for-le_CU3UcxxLT7CdwsH8uPLE8w_nOTk0dHPQqezt1ft36QuVA-unclmawAU5r1mvRuVR06vKWI2gsK3n.png"
                alt="Detailed lace appliqué dress"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-xl mb-2">The Flora Evening Gown</h3>
                  <p className="text-sm">Intricate lace detailing with modern sophistication</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                >
                  <Plus className="h-4 w-4 text-white" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-brand">The Flora Evening Gown</p>
              <p className="text-brand-dark">Couture Collection</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localhostagents_Create_a_couture_dress_design_for_L_Pure_that_c4dcc21f-78b6-40b8-8b93-8a49e9c800d7_1-4jZ91KZNCojf7g62h66fTLnVfkqtg7.png"
                alt="Luxurious bridal boutique with champagne mermaid gown"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-xl mb-2">The Champagne Dream Gown</h3>
                  <p className="text-sm">Opulent mermaid silhouette with intricate detailing</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                >
                  <Plus className="h-4 w-4 text-white" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-brand">The Champagne Dream Gown</p>
              <p className="text-brand-dark">Bridal Collection</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localhostagents_Create_a_couture_dress_design_for_L_Pure_that_c4dcc21f-78b6-40b8-8b93-8a49e9c800d7_0-qySHdrOBBVzOVN07SUlVi9EJKg0JVV.png"
                alt="Futuristic white dress with sculptural details"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="font-serif text-xl mb-2">The Avant-Garde Vision Dress</h3>
                  <p className="text-sm">Sculptural elegance meets futuristic design</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 border-white/40 hover:bg-white/40"
                >
                  <Plus className="h-4 w-4 text-white" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-lg text-brand">The Avant-Garde Vision Dress</p>
              <p className="text-brand-dark">Couture Collection</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Button variant="outline" className="border-brand text-brand hover:bg-brand hover:text-cream">
            View Full Collection
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionSection

