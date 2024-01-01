import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Joy Chima Blog',
  description: 'A blog about various topics and interests',
  generator: 'GraphCMS',
  applicationName: 'Joy Chima Blog',
  referrer: 'origin-when-cross-origin',
  keywords: ['Blogging', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Joy Chima' }, { name: 'Jude', url: 'https://ebekesjude.verce.app' }],
  creator: 'Jude Ebeke',
  publisher: 'Jude Ebeke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
