import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "ByteAll Energy - Digital Oilfield Solutions",
    template: "%s | ByteAll Energy"
  },
  description: "Leading digital oilfield solutions provider specializing in integrated production modeling, real-time field data monitoring, and advanced energy software. Transforming oil & gas operations through cutting-edge technology since 2017.",
  keywords: [
    "digital oilfield",
    "integrated production modeling", 
    "oil and gas digitalization",
    "energy software development",
    "production optimization",
    "real-time monitoring",
    "reservoir simulation",
    "PVT characterization",
    "Kazakhstan energy",
    "digital transformation",
    "energy technology",
    "oilfield automation"
  ],
  authors: [{ 
    name: "ByteAll Energy",
    url: "https://byteallenergy.com"
  }],
  creator: "ByteAll Energy",
  publisher: "ByteAll Energy",
  category: "Technology",
  classification: "Energy Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://byteallenergy.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://byteallenergy.com',
    title: 'ByteAll Energy - Digital Oilfield Solutions',
    description: 'Leading digital oilfield solutions provider specializing in integrated production modeling, real-time field data monitoring, and advanced energy software. Transforming oil & gas operations through cutting-edge technology since 2017.',
    siteName: 'ByteAll Energy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ByteAll Energy - Digital Oilfield Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByteAll Energy - Digital Oilfield Solutions',
    description: 'Leading digital oilfield solutions provider specializing in integrated production modeling, real-time field data monitoring, and advanced energy software.',
    images: ['/og-image.jpg'],
    creator: '@byteallenergy',
    site: '@byteallenergy',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'msapplication-TileColor': '#0ea5e9',
    'theme-color': '#0ea5e9',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
