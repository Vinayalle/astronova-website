import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: 'export',
  
 images: {
  domains: ["upload.wikimedia.org", "images.pexels.com", "cdn.pixabay.com"],
  unoptimized: true,
}

};

export default nextConfig;
