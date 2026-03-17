import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: "AK Consulting — 10x Your Growth with AI",
  description: "We help ambitious businesses 10x their growth with AI-powered systems, stunning websites, and automation that works while you sleep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}




