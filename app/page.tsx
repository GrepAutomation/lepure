"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import AboutSection from "@/components/about-section"
import CollectionSection from "@/components/collection-section"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full bg-cream/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <nav className="hidden space-x-8 font-serif text-lg text-brand md:flex">
            <Link href="#collection" className="hover:text-brand-dark">
              Collection
            </Link>
            <Link href="#about" className="hover:text-brand-dark">
              About
            </Link>
          </nav>
          <Link href="/" className="text-4xl md:text-5xl font-serif font-bold text-brand">
            Lé Pure
          </Link>
          <nav className="hidden space-x-8 font-serif text-lg text-brand md:flex">
            <Link href="#boutique" className="hover:text-brand-dark">
              Boutique
            </Link>
            <Link href="#contact" className="hover:text-brand-dark">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>
      <main>
        <section className="relative flex min-h-screen items-center justify-center">
          <div className="container flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-minimalistic-logo-for-le-pure-with-an-_pLGE3UPfSOe4eJRY13EVgA_BYom03KyRJCO1BnAAR8Y3Q-VkJwas7h93ckLkvVJFIwac7NUbOaXV.png"
                alt="Lé Pure Logo"
                width={400}
                height={400}
                priority
                className="mx-auto"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6 font-serif text-4xl text-brand md:text-6xl"
            >
              Timeless Elegance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-brand-dark"
            >
              Discover our collection of refined luxury pieces, crafted with precision and grace.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
              <Button variant="outline" className="border-brand text-brand hover:bg-brand hover:text-cream">
                Explore Collection
              </Button>
            </motion.div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-brand" />
          </div>
        </section>

        <CollectionSection />
        <AboutSection />
      </main>
    </div>
  )
}

export default HomePage

