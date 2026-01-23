import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Pratik Sabale | MERN & Python Mentor, AI Journalist, Tech Speaker',
  description: 'I help students and professionals grow through MERN & Python Full Stack mentoring. I also publish AI/tech stories and speak at workshops across India.',
  generator: 'v0.app',
  keywords: ['MERN Stack', 'Python', 'Full Stack Developer', 'Mentor', 'AI Journalist', 'Tech Speaker', 'Web Development'],
  authors: [{ name: 'Pratik Sabale' }],
  openGraph: {
    title: 'Pratik Sabale | MERN & Python Mentor, AI Journalist, Tech Speaker',
    description: 'Mentoring developers, speaking about AI, and writing tech stories.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratik Sabale | MERN & Python Mentor, AI Journalist, Tech Speaker',
    description: 'Mentoring developers, speaking about AI, and writing tech stories.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
