/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.shopskey.com" },
      { protocol: "https", hostname: "shopskey.com" },
      { protocol: "https", hostname: "maxinewilson.com" },
      { protocol: "https", hostname: "cookiekpopmerch.com" },
      { protocol: "https", hostname: "ourcarehospice.com" },
      { protocol: "https", hostname: "villasunsetwaters.com" },
      { protocol: "https", hostname: "clientproject.site" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2|woff|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Link",
            value:
              "</fonts.googleapis.com>; rel=preconnect; crossorigin, </cdnjs.cloudflare.com>; rel=preconnect; crossorigin, </static.zdassets.com>; rel=preconnect; crossorigin",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [];
  },

  async redirects() {
    return [];
  },

  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["react-icons", "lodash", "swiper"],
    webVitalsAttribution: ["CLS", "LCP"],
    optimizeServerReact: true,
  },

  env: {
    SITE_URL: process.env.SITE_URL || "https://shopskey.com",
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
