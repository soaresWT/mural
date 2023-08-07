import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import favicon from '../../public/IconRoundAzul.png'

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Mural',
  description: 'Mural de vagas da UFC Quixadá',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel='icon' href="../../public/IconRoundAzul.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
