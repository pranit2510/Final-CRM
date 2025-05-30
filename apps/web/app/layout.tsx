import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ConditionalNavigation } from '../components/conditional-navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
}

export const metadata: Metadata = {
  title: 'BlueCollarCRM - CRM for Construction & Field Services',
  description: 'Affordable, easy-to-use CRM built specifically for construction, plumbing, electrical, HVAC, landscaping and other blue-collar service companies.',
  keywords: [
    'CRM',
    'construction CRM',
    'field service CRM',
    'plumbing CRM',
    'electrical CRM',
    'HVAC CRM',
    'landscaping CRM',
    'blue collar',
    'service business'
  ],
  authors: [{ name: 'BlueCollarCRM Team' }],
  creator: 'BlueCollarCRM',
  publisher: 'BlueCollarCRM',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bluecollarcrm.com',
    title: 'BlueCollarCRM - CRM for Construction & Field Services',
    description: 'Affordable, easy-to-use CRM built specifically for blue-collar service companies.',
    siteName: 'BlueCollarCRM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueCollarCRM - CRM for Construction & Field Services',
    description: 'Affordable, easy-to-use CRM built specifically for blue-collar service companies.',
    creator: '@bluecollarcrm',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <ConditionalNavigation />
          {children}
        </Providers>
      </body>
    </html>
  )
} 