/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["adsgenda.com"], // ✅ อนุญาตให้โหลดรูปจาก adsgenda.com
    },
};

export default nextConfig;
