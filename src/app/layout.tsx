import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Ramírez | Full-Stack Developer & Líder Técnico | León, MX",
  description: "Full-Stack Developer con 5+ años creando soluciones enterprise. Especializado en React, Node.js, Flutter. Líder técnico con experiencia en Coca-Cola FEMSA, Gobierno de Guanajuato.",
  keywords: ["Diego Ramírez", "Full-Stack Developer", "Líder Técnico", "React", "Node.js", "Flutter", "León Guanajuato", "Desarrollador Web", "TypeScript", "PostgreSQL"],
  authors: [{ name: "Diego Eduardo Ramírez Martínez", url: "https://diegoramirez.dev" }],
  creator: "Diego Eduardo Ramírez Martínez",
  publisher: "Diego Ramírez",
  metadataBase: new URL("https://diegoramirez.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Diego Ramírez | Full-Stack Developer & Líder Técnico",
    description: "Full-Stack Developer especializado en soluciones enterprise. Líder técnico con 5+ años de experiencia en React, Node.js, Flutter y más.",
    url: "https://diegoramirez.dev",
    siteName: "Diego Ramírez Portfolio",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Diego Ramírez - Full-Stack Developer & Líder Técnico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Ramírez | Full-Stack Developer & Líder Técnico",
    description: "Full-Stack Developer especializado en soluciones enterprise. Líder técnico con 5+ años de experiencia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066CC" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Diego Eduardo Ramírez Martínez",
              alternateName: "Diego Ramírez",
              description: "Full-Stack Developer y Líder Técnico especializado en soluciones enterprise",
              url: "https://diegoramirez.dev",
              image: "https://diegoramirez.dev/profile-photo.jpg",
              sameAs: [
                "https://linkedin.com/in/diego-ramirez-dev",
                "https://github.com/diego-ramirez-dev"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "León",
                addressRegion: "Guanajuato",
                addressCountry: "México"
              },
              jobTitle: "Full-Stack Developer & Líder Técnico",
              worksFor: {
                "@type": "Organization",
                name: "Grupo Inxeniux"
              },
              knowsAbout: [
                "React",
                "Node.js",
                "TypeScript",
                "Flutter",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Leadership",
                "Software Architecture"
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad Tecnológica de León"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
