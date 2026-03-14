import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/context/AppContext";
import GoogleAuthProvider from "@/components/GoogleAuthProvider";
import Squares from "@/components/Squares";

export const metadata: Metadata = {
  title: "HireHeaven - Find Your Dream Job in India",
  description:
    "HireHeaven is India's #1 job portal connecting talented job seekers with top employers. Browse thousands of jobs, analyze your resume with AI, and get personalized career guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background/50">
        <div className="fixed inset-0 -z-10 bg-background opacity-100">
          <Squares 
            speed={0.5} 
            squareSize={40} 
            direction="diagonal" 
            borderColor="#e5e7eb" 
            hoverFillColor="#f3f4f6" 
          />
        </div>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            forcedTheme="light"
            disableTransitionOnChange
          >
            <GoogleAuthProvider>
              <NavBar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </GoogleAuthProvider>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
