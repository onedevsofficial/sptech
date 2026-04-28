import Script from "next/script";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

// Microsoft Clarity — session recordings, heatmaps, click maps.
// Project ID is overridable via NEXT_PUBLIC_CLARITY_ID; defaults to the
// production project so it just works after deploy.
export default function Clarity() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID || "wiskih61v0";
  if (!id) return null;

  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${id}");
        `,
      }}
    />
  );
}
