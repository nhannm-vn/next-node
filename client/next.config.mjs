/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        // pathname: '/photos/**'
      },
      {
        protocol: "https",
        hostname: "api.minhnhan.io.vn",
        // pathname: '/photos/**'
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
