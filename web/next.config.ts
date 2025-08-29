import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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