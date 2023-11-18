import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Utilities/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'MAnimeList',
  description: 'website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-dark`}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
