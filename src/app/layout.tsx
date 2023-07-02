import './globals.css'
import { Lato } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import { Toaster } from 'react-hot-toast'


const inter = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Momentum',
  description: 'Generated by Syed Rohan Ali',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Providers>
          <Header />
          <Toaster />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
