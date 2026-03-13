import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"



const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Pratik Sabale | MERN & Python Mentor, AI Journalist, Tech Speaker",
  description:
    "I help students and professionals grow through MERN & Python Full Stack mentoring. I also publish AI/tech stories and speak at workshops across India.",
  generator: "v0.app",
  keywords: [
    "MERN Stack",
    "Python",
    "Full Stack Developer",
    "Mentor",
    "AI Journalist",
    "Tech Speaker",
    "Web Development",
  ],
  authors: [{ name: "Pratik Sabale" }],
  openGraph: {
    title: "Pratik Sabale | MERN & Python Mentor, AI Journalist, Tech Speaker",
    description:
      "Mentoring developers, speaking about AI, and writing tech stories.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Sabale | MERN & Python Mentor, AI Journalist, Tech Speaker",
    description:
      "Mentoring developers, speaking about AI, and writing tech stories.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geist.variable}
          ${geistMono.variable}
          font-sans antialiased
        `}
      >

        <SmoothScroll>
          {/* App content */}
          {children}
        </SmoothScroll>
        {/* Analytics */}
        <Analytics />



      </body>
    </html>
  )
}
