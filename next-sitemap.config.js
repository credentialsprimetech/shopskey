/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://shopskey.com",
  generateRobotsTxt: true, // robots.txt generate karega
  sitemapSize: 7000,       // ek sitemap me max 7000 URLs
  changefreq: "daily",     // Google ko daily crawl hint
  priority: 0.7,           // default priority
  exclude: ["/admin/*", "/dashboard/*"], // optional: kuch routes exclude karne ke liye
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://shopskey.com/sitemap.xml",
    ],
  },
};

export default config;
