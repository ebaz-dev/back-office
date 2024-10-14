/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    MEDIA_URL: process.env.MEDIA_URL,
    MEDIA_UPLOAD: process.env.MEDIA_UPLOAD
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pics.ebazaar.link'
      },
      {
        protocol: 'https',
        hostname: 'm.ebazaar.mn'
      }
    ]
  }
};

export default nextConfig;
