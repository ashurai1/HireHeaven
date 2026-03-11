import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/context/AppContext";

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
      <body className="min-h-screen flex flex-col">
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t py-6 md:py-0">
              <div className="container mx-auto flex h-14 items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Ashwani Rai. All rights reserved.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
