import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prof. Saidou Madougou | Strategic Leadership in Education, Science, Technology & Innovation",
  description: "Executive portfolio of Prof. Saidou Madougou, Strategic Leadership in Education, Science, Technology & Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${playfair.variable} ${inter.variable} antialiased font-inter bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Preloader />
          <Header />
          <div className="pt-20">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
