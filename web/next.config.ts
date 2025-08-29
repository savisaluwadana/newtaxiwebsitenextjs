import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // ensure Next produces server-side output so app-router API routes are deployed on Vercel
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "/**",
            },
        ],
    },
    // experimental: {
    //     serverActions: true,
    // },
};

export default nextConfig;