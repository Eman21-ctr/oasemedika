import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Oase Medika Klinik Kupang - Layanan Kesehatan Profesional & Ramah",
  description: "Oase Medika Klinik hadir sebagai mitra kesehatan keluarga Anda di Kupang, NTT. Menyediakan layanan Homecare, Sunat Modern, Perawatan Luka, dan Laboratorium dengan tenaga medis profesional.",
  keywords: ["klinik kupang", "homecare kupang", "sunat modern kupang", "perawatan luka kupang", "laboratorium kupang", "oase medika"],
  authors: [{ name: "Oase Medika Klinik" }],
  openGraph: {
    title: "Oase Medika Klinik Kupang",
    description: "Layanan Kesehatan Profesional & Ramah di Kota Kupang.",
    url: "https://oasemedika.com",
    siteName: "Oase Medika",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${jakarta.variable} antialiased`} style={{ fontFamily: "var(--font-jakarta)" }}>
        {children}
      </body>
    </html>
  );
}
