import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";

import Header from "@/components/header/Header";
import FooterSection from "@/components/footerSection/FooterSection";
import AosInitializer from "@/components/AosInitializer";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Script from "next/script";
import { ModalProvider } from "./utils/Context/ModalContext";
import LeadModal from "@/components/leadModal/LeadModal";

// Optimized font loading with preload and display swap
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// Enhanced SEO metadata
export const metadata = {
  metadataBase: new URL("https://shopskey.com"),
  title: {
    default:
      "Shopskey - Leading Web & App Development Services | Custom Digital Solutions",
    template: "%s | Shopskey",
  },
  description:
    "Transform your business with Shopskey's expert web development and mobile app services. We create custom websites and powerful applications that drive results and boost your online presence.",
  keywords:
    "web development, app development, custom websites, mobile applications, digital marketing, logo design, ecommerce solutions, responsive design, UI UX design, react development, next js development",
  authors: [{ name: "Shopskey Development Team" }],
  creator: "Shopskey",
  publisher: "Shopskey",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopskey.com",
    title: "Shopskey - Leading Web & App Development Services",
    description:
      "Transform your business with expert web development and mobile app services. Custom digital solutions that drive results.",
    siteName: "Shopskey",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopskey Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopskey - Leading Web & App Development Services",
    description:
      "Transform your business with expert web development and mobile app services.",
    creator: "@shopskey",
    images: ["/images/twitter-card.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
  classification: "Web Development Services",

  verification: {
    google: "KU814iANfI6OVHVGoCLupslE9aVJbFHXvtiCW0b6n5s",
    yandex: "609cfcd8e39fb3c1",
    // yahoo: "your-yahoo-verification-code",
  },

  alternates: {
    canonical: "https://shopskey.com",
    languages: {
      "en-US": "https://shopskey.com",
    },
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/images/fav.png",
    shortcut: "/images/fav.png",
    apple: "/images/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/apple-touch-icon-precomposed.png",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="KU814iANfI6OVHVGoCLupslE9aVJbFHXvtiCW0b6n5s"
        />
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//static.zdassets.com" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/icomon.css" />
        <link rel="stylesheet" href="/assets/css/main.css"></link>
        {/* Preconnect */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin=""
        />

        {/* Critical CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />

        {/* Async CSS */}
        {[
          "animate.css",
          "magnific-popup.css",
          "meanmenu.css",
          "nice-select.css",
          "icomon.css",
        ].map((css) => (
          <link
            key={css}
            rel="preload"
            href={`/assets/css/${css}`}
            as="style"
            // onLoad="this.onload=null;this.rel='stylesheet'"
          />
        ))}
        <noscript>
          <link rel="stylesheet" href="/assets/css/animate.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="/assets/css/meanmenu.css" />
          <link rel="stylesheet" href="/assets/css/nice-select.css" />
          <link rel="stylesheet" href="/assets/css/icomon.css" />
        </noscript>

        {/* Font Awesome */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          crossOrigin="anonymous"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            crossOrigin="anonymous"
          />
        </noscript>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shopskey",
              url: "https://shopskey.com",
              logo: "https://shopskey.com/images/logo.png",
              description:
                "Leading web and app development company providing custom digital solutions",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/shopskey",
                "https://twitter.com/shopskey",
                "https://linkedin.com/company/shopskey",
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        <ModalProvider>
          <AosInitializer />

          <header role="banner">
            <Header />
          </header>

          <main id="main-content" role="main">
            {children}
          </main>

          <ScrollToTop />
          <LeadModal />

          <footer role="contentinfo">
            <FooterSection />
          </footer>
        </ModalProvider>

        {/* Core Web Vitals */}
        <Script
          id="web-vitals"
          src="https://unpkg.com/web-vitals@3/dist/web-vitals.attribution.iife.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />

        {/* Zendesk Chat */}
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=7ad04258-0f0b-4235-8598-c01e43c85815"
          strategy="lazyOnload"
        />
        <Script
          id="zendesk-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function openZendeskChat() {
                if (window.zE) {
                  zE('webWidget', 'open');
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'chat_opened', {
                      event_category: 'engagement',
                      event_label: 'zendesk_chat'
                    });
                  }
                }
              }
              if (window.innerWidth < 768) {
                document.addEventListener('DOMContentLoaded', function() {
                  if (window.zE) zE('webWidget', 'hide');
                });
              }
            `,
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Shopskey",
              url: "https://shopskey.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://shopskey.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
