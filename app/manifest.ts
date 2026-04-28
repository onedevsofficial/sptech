import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPTech",
    short_name: "SPTech",
    description:
      "Affordable website design, development and app services for Indian businesses — starting at ₹999/month.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F8FC",
    theme_color: "#0A1A4A",
    icons: [
      { src: "/sptech.png", sizes: "any", type: "image/png" },
    ],
  };
}
