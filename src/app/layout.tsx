import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import RootProviders from "@/components/Providers/RootProviders"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BudgetTracker",
  description: "Developed By Nemoto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>  
      <html
        lang="en"
        className="dark"
        style={{
          colorScheme: "dark"
        }}
      >
        <body className="min-h-full flex flex-col">
          <RootProviders>
            { children }
          </RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
