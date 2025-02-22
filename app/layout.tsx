import type React from "react"
import "@/styles/globals.css"
import { Cormorant_Garamond, Montserrat } from "next/font/google"

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const serif = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-cream font-sans antialiased">{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
