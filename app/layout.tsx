import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '@/app/globals.css'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amatech',
  description: 'A website for the Management Technology Department, Lagos State University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gray-100`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
