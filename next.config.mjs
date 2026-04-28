/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.clarity.ms https://*.clarity.ms https://js.hcaptcha.com https://*.hcaptcha.com https://hcaptcha.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.hcaptcha.com https://hcaptcha.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.facebook.com https://*.clarity.ms https://c.bing.com https://*.hcaptcha.com https://hcaptcha.com https://api.web3forms.com",
      "frame-src https://*.hcaptcha.com https://hcaptcha.com https://newassets.hcaptcha.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' https://api.web3forms.com",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Short, ad-friendly aliases that all funnel to the ₹999 LP.
    return [
      { source: "/999", destination: "/999-website-plan", permanent: true },
      { source: "/999-monthly", destination: "/999-website-plan", permanent: true },
      { source: "/999-plan", destination: "/999-website-plan", permanent: true },
      { source: "/website-999", destination: "/999-website-plan", permanent: true },
    ];
  },
};

export default nextConfig;
