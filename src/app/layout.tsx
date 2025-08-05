//Fonts
import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
//CSS
import "./globals.css";
//Components
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

// Inter Font for Body
const inter = Inter({ subsets: ["latin"] });

// Lexend Font Bold for Logo
const lexend = Lexend({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-lexend",
});

// Site Metadata
export const metadata: Metadata = {
  title: "NicoDev | Full Stack Developer Portfolio",
  description:
    "Explore the work, experience, and top projects of Nicolás Játiva — a passionate Full Stack Developer from Ecuador. Clean, modern, and crafted to showcase his skills in web development.",
    openGraph: {
      title: "NicoDev | Full Stack Developer Portfolio",
      description: "Explore the work, experience, and top projects of Nicolás Játiva — a passionate Full Stack Developer from Ecuador.",
      url: "https://nj-aceternity-portfolio.vercel.app",
      siteName: "NicoDev Portfolio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Screenshot of NicoDev Portfolio",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "NicoDev | Full Stack Developer Portfolio",
      description: "Explore the work, experience, and top projects of Nicolás Játiva — a passionate Full Stack Developer from Ecuador.",
      images: ["/og-image.png"],
    },
  };

// Root Layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Flaticon Icons */}
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css" />
        {/* Web Title for Apple */}
        <meta name="apple-mobile-web-app-title" content="NicoDev" />
      </head>
      {/* Page Main Configs */}
      <body className={cn(
          `${inter.className} ${lexend.variable} flex flex-col min-h-screen`,
          "bg-white text-black",
          "dark:bg-zinc-950 dark:text-white"
        )}
      >
       {/* Theme Provider Wrapper for Dark Mode */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
