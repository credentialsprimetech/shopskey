/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React dev warnings and safer code
  swcMinify: true, // Fast & smaller builds
  
  // ✅ Optimize Images
  images: {
    domains: [
      "www.shopskey.com",
      "shopskey.com",
      "maxinewilson.com",
      "cookiekpopmerch.com", 
      "ourcarehospice.com",
      "villasunsetwaters.com",
      "clientproject.site", // Add for hero banner image
    ],
    formats: ["image/avif", "image/webp"], // Serve modern formats
    minimumCacheTTL: 86400, // 24 hours cache (increased from 60 seconds)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ✅ Compression & Caching  
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove "X-Powered-By: Next.js" 

  // ✅ Custom Headers (for cache-control, preconnect, security, etc.)
  async headers() {
    return [
      // Static assets caching
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2|woff|ttf|eot)",
        headers: [
          {
            key: "Cache-Control", 
            value: "public, max-age=31536000, immutable", // 1 year cache for static assets
          },
        ],
      },
      // CSS and JS files
      {
        source: "/:all*(css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // 24 hours for CSS/JS
          },
        ],
      },
      // Security headers for all pages
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "X-XSS-Protection", 
            value: "1; mode=block"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          },
          // Preconnect to external domains
          {
            key: "Link",
            value: "</fonts.googleapis.com>; rel=preconnect; crossorigin, </cdnjs.cloudflare.com>; rel=preconnect; crossorigin, </static.zdassets.com>; rel=preconnect; crossorigin"
          }
        ],
      },
    ];
  },

  // ✅ Rewrites for better SEO URLs (if needed)
  async rewrites() {
    return [
      // Example: redirect old URLs to new ones
      // {
      //   source: '/old-services',
      //   destination: '/services',
      // },
    ];
  },

  // ✅ Redirects for SEO (301 redirects)
  async redirects() {
    return [
      // Example: redirect non-www to www or vice versa
      // {
      //   source: 'http://shopskey.com/:path*',
      //   destination: 'https://www.shopskey.com/:path*',
      //   permanent: true,
      // },
    ];
  },

  // ✅ Experimental Optimizations
  experimental: {
    scrollRestoration: true, // Better UX when navigating back
    optimizeCss: true, // Reduces CSS size
    optimizePackageImports: ["react-icons", "lodash", "swiper"], // Tree-shake big libs
    webVitalsAttribution: ["CLS", "LCP"], // Better Core Web Vitals tracking
    optimizeServerReact: true, // Optimize server components
    // Enable if using App Router
    // appDir: true,
  },

  // ✅ Bundle Analyzer (enable when needed for debugging)
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   if (process.env.ANALYZE) {
  //     const BundleAnalyzerPlugin = require('@next/bundle-analyzer')()
  //     config.plugins.push(new BundleAnalyzerPlugin())
  //   }
  //   return config
  // },

  // ✅ Environment Variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://shopskey.com',
  },

  // ✅ Output configuration
  output: 'standalone', // For containerized deployments
  
  // ✅ TypeScript configuration (if using TypeScript)
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreBuildErrors: false,
  },

  // ✅ ESLint configuration  
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;