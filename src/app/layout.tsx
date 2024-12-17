import type { Metadata } from "next"
import { Inter, Space_Grotesk } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Duospense - Expense Tracker",
  description: "Track your expenses with ease",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

