import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
    weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"]
});

const description = "An agentic AI Discord bot.";

export const metadata: Metadata = {
    title: "Vesper · AI Discord Bot",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Vesper",
        description: description,
        url: "https://vesper.gg",
        images: [{
            url: "https://vesper.gg/images/splash.jpg",
            width: 1200,
            height: 630,
            alt: "Vesper splash image"
        }],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vesper",
        description: description
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
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://vesper.gg" />
            </head>

            <body className={`${inter.className} h-screen text-gray-500 bg-gradient-to-b bg-gray-950 from-gray-900 to-gray-950`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}