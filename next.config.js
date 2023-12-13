/** @type {import('next').NextConfig} */

module.exports = () => {
  return {
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [425, 570, 768, 1024],
      // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    },
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
  };
};
