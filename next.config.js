/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["d3t32hsnjxo7q6.cloudfront.net", "www.dior.com"],
  },
};

module.exports = nextConfig;

// avif는 인코딩시 20% 더 오래걸리지만 webp와 비교할 때 20% 더 작게 압축되어 avif는 처음 요청시 보통 더 느리고 캐시된 그다음 요청부터는 빠름
