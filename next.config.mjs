/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "getbootstrap.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github.githubassets.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "nordicapis.com",
        port: "",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "www.scnsoft.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.w3.org",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "namahaom.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "sigitek.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
