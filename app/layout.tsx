import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="overflow-x-hidden">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

