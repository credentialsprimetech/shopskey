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
    ],
    formats: ["image/avif", "image/webp"], // Serve modern formats
    minimumCacheTTL: 60, // CDN caching (in seconds) - set higher if images don't change often
  },

  // ✅ Compression & Caching
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove "X-Powered-By: Next.js" (small security + perf)

  // ✅ Custom Headers (for cache-control, preconnect, etc.)
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|css|js|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache for static assets
          },
        ],
      },
    ];
  },

  // ✅ Experimental Optimizations (if needed)
  experimental: {
    scrollRestoration: true, // better UX when navigating back
    optimizeCss: true, // reduces CSS size
    optimizePackageImports: ["react-icons", "lodash"], // example: tree-shakes big libs
  },
};

export default nextConfig;
