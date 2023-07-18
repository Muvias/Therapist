import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Slab as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Terapeuta',
  description: 'Uma LandingPage sobre um terapeuta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
