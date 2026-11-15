import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Forma and IBM are Roles, not Projects; keep their old links working.
  async redirects() {
    return ["forma", "ibm"].map((slug) => ({
      source: `/project/${slug}`,
      destination: `/role/${slug}`,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
