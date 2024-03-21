import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Quick Response",
  description: "This is an application for quickly submitting responses to FAQs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased",fontSans.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar></Navbar>
        <Toaster />
        {children}
        <Footer></Footer>
        <Analytics />
      </ThemeProvider>
      </body>
    </html>
  );
}
