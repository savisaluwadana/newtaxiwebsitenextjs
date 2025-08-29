import type {Metadata} from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ConsoleProtection from "@/components/ConsoleProtection";
import Script from "next/script";

export const metadata: Metadata = {
    manifest: '/manifest.json',
    title: "Taxi Tissamaharama | taxi thissamaharama",
    description: "Looking for a taxi in Tissamaharama or anywhere in Sri Lanka? taxi thissamaharama offers safe, affordable, and reliable taxi services tailored for tourists. Whether it’s airport transfers, day tours, or hotel pickups, ride with confidence. Book your journey with taxi thissamaharama today!",
    keywords: [
        "Taxi Tissamaharama", "Taxi Sri Lanka", "Tissamaharama Taxi Service",
        "Airport Transfers Sri Lanka", "Affordable Taxi Service",
        "Best Taxi in Sri Lanka", "Taxi Booking Sri Lanka", "Tuk Tuk Hire Sri Lanka", "Taxi Service in Sri Lanka", "Taxis for Tuorists", "Taxi Sri Lanka",
        "TakeMeLK", "Taxi Tissamaharama", "Taxi Service", "Sri Lanka Taxi", "Tissamaharama Taxi",
    ],
    openGraph: {
        title: "Taxi Tissamaharama | TakeMeLK",
        description: "For all your Taxi and Tour needs in Sri Lanka.",
    url: "https://www.taxithissamaharama.com",
    siteName: "taxi thissamaharama",
        images: [
            {
                url: "https://www.takemelk.com/favicon.ico",
                width: 256,
                height: 256,
                alt: "Taxi service in Sri Lanka",
            },
        ],
        type: "website",
    },
    robots: "index, follow",
    twitter: {
    card: "summary_large_image",
    site: "@taxithissamaharama",
        title: "Taxi Tissamaharama - Book a Ride",
        description: "Affordable taxi services across Sri Lanka.",
    images: ["https://www.taxithissamaharama.com/favicon.ico"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* Adding SEO Keywords */}
        <meta name="keywords"
            content="Taxi Tissamaharama, Taxi Sri Lanka, Tissamaharama Taxi Service, Airport Transfers Sri Lanka, Affordable Taxi Service, Best Taxi in Sri Lanka, Taxi Booking Sri Lanka, Tuk Tuk Hire Sri Lanka, Taxi Service in Sri Lanka, Taxis for Tuorists, Taxi Sri Lanka, taxi thissamaharama, Taxi Tissamaharama, Taxi Service, Sri Lanka Taxi, Tissamaharama Taxi"/>

            {/* Adding robots.txt and sitemap */}
            <link rel="manifest" href="/manifest.json"/>
            <link rel="canonical" href="https://www.taxithissamaharama.com/"/>
            <meta name="robots" content="index, follow"/>

            {/* Google Analytics Script - Using next/script */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-XH2Z4T2V0V"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XH2Z4T2V0V');
                `}
            </Script>
        </head>
        <body className="antialiased min-h-screen gradient-primary flex flex-col justify-between overflow-x-hidden">
            <ConsoleProtection/>
            <NavBar/>
                {children}
            <Footer/>
        </body>
        </html>
    );
}


