import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Analytics 4 (gtag.js). Defaults to the production property so it
// just works after deploy; override via NEXT_PUBLIC_GA_ID for a separate
// staging property.
export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID || "G-MD5CKDFKQR";
  if (!id) return null;

  return (
    <>
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
          `,
        }}
      />
    </>
  );
}
