import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "FERNANDEZ PORTFOLIO",
  description: "FERNANDEZ's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased font-sans"
    >
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
