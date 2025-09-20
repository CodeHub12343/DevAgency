import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: 'DevAgency Pro - Full-Stack Development Solutions',
  description: 'Leading full-stack development agency specializing in modern web applications, mobile apps, and digital solutions. We transform ideas into powerful, scalable digital experiences.',
  keywords: 'full-stack development, web development, mobile apps, digital agency, software development, React, Next.js, Node.js',
  authors: [{ name: 'DevAgency Pro Team' }],
  creator: 'DevAgency Pro',
  publisher: 'DevAgency Pro',
  robots: 'index, follow',
  icons: {
    icon: '/WhatsApp Image 2025-09-16 at 4.17.18 AM.jpeg',
    shortcut: '/WhatsApp Image 2025-09-16 at 4.17.18 AM.jpeg',
    apple: '/WhatsApp Image 2025-09-16 at 4.17.18 AM.jpeg',
  },
  openGraph: {
    title: 'DevAgency Pro - Full-Stack Development Solutions',
    description: 'Leading full-stack development agency specializing in modern web applications, mobile apps, and digital solutions.',
    url: 'https://devagency-pro.com',
    siteName: 'DevAgency Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevAgency Pro - Full-Stack Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevAgency Pro - Full-Stack Development Solutions',
    description: 'Leading full-stack development agency specializing in modern web applications, mobile apps, and digital solutions.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.className} antialiased`}>
        <div className="relative min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
