/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {}, // ✅ Must be an object, not a boolean
    },
    // ✅ Move this out of `experimental`
    serverExternalPackages: ['mongoose'],

    images: {
        domains: ['m.media-amazon.com'],
    },

};

module.exports = nextConfig;