"use client"

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../store";

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="overflow-x-hidden">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  )
}

