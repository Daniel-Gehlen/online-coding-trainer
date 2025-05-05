import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'online-coding-trainer',
  description: 'Created with Next',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
