import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import FooterSection from "@/components/footerSection/FooterSection";
import AosInitializer from "@/components/AosInitializer";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Script from "next/script";
import { ModalProvider } from "./utils/Context/ModalContext";
import LeadModal from "@/components/leadModal/LeadModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopsKey",
  description: "Your Gateway to Seamless E-commerce Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/fav.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/icomon.css" />
        <link rel="stylesheet" href="/assets/css/main.css"></link>

        {/* <link rel="stylesheet" href="/css/boxicons.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/odometer.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" /> */}
      </head>
      <body>
        <ModalProvider>
          <AosInitializer />
          <Header />
          <main>{children}</main>
          <ScrollToTop />
          <LeadModal />
          <FooterSection />
        </ModalProvider>

        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=7ad04258-0f0b-4235-8598-c01e43c85815"
          strategy="afterInteractive"
        />
        <Script id="zendesk-init" strategy="afterInteractive">
          {`
            function openZendeskChat() {
              if (window.zE) {
                zE('webWidget', 'open');
              } else {
                console.error("Zendesk widget not loaded yet.");
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
