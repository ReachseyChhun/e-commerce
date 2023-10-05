/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    allowFutureImage: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com", // Change this to the new domain
        port: "",
        pathname: "/images/**", // Adjust the pathname as needed
      },
    ],
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
