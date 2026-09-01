import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "TopUp PPOB - Fast, Reliable & Gamified Game Top-Up",
  description: "Beli diamond, voucher game, dan PPOB instant dengan reward poin & diskon harian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <footer className="border-t border-gray-800 bg-gray-950 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TopUpPlay. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
