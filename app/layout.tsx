import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "BF Suma Tanzania | Win With Sadick",
  description: "Fursa ya kipekee ya kujenga biashara yako na kupata kipato cha ziada kupitia BF Suma Tanzania na Dr. Sadick Msamvu.",
  keywords: "BF Suma Tanzania, Dr Sadick, Win With Sadick, biashara Tanzania, afya, supplements, mlolongo wa mafanikio",
  openGraph: {
    title: "BF Suma Tanzania | Win With Sadick",
    description: "Jenga biashara yako kwa mafanikio pamoja na Dr. Sadick na BF Suma.",
    url: "https://winwithsadick.info",
    siteName: "Win With Sadick",
    images: [
      {
        url: "https://winwithsadick.info/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dr_sadick",
  },
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
