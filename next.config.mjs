/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false,
    },
    swcMinify: true,
    env: {
        API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
        API_USER_BASE_PATH: process.env.NEXT_PUBLIC_API_USER_BASE_PATH,
        API_VERSION: process.env.NEXT_PUBLIC_API_VERSION,
    }

};

export default nextConfig;
