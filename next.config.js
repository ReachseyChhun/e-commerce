/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    allowFutureImage: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Change this to the new domain
        port: "",
        pathname: "/images/**", // Adjust the pathname as needed
      },
    ],
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
