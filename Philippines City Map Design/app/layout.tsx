import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Philippines City Map Design',
  description: 'Interactive map design for Philippines cities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full m-0">
        {children}
      </body>
    </html>
  )
}
