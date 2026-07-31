import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoiko Realty",
  description:
    "AI-powered discovery, property intelligence, transaction orchestration, compliance control, and portfolio visibility — in one governed infrastructure built for global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
