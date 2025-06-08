import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

const description = "An easy-to-use file sharing platform.";

export const metadata: Metadata = {
    title: "Vesper · AI Discord Bot",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Vesper · AI Discord Bot",
        description: description,
        url: "https://vesper.gg",
        images: [{
            url: "https://vesper.gg/images/splash.jpg",
            width: 1200,
            height: 630,
            alt: "Vesper splash image"
        }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vesper · AI Discord Bot",
        description: description,
        creator: "@harveycoombs23",
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#FF2056" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://vesper.gg" />
            </head>

            <body className={`${inter.className} min-h-screen bg-gradient-to-b from-zinc-950 to-black text-zinc-500`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}