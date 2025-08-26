import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Kaushan_Script } from 'next/font/google'
import './globals.css'

const kaushanScript = Kaushan_Script({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan'
})

export const metadata: Metadata = {
  title: '¡Con música en vivo!',
  description: '¡Con música en vivo! web site'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-kaushan: ${kaushanScript.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${kaushanScript.variable}`}>{children}</body>
    </html>
  )
}
