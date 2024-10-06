import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    prependData: `@import "@/styles/_mantine.scss";`,
  },
  images: {
    minimumCacheTTL: 60,  
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1370',
      },
      {
        protocol: 'https',
        hostname: 'affilio.ir',
      },
    ],
  },  
  async headers() {
    return [
      {
        source: '/(.*)', 
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', 
          },
        ],
      },
    ];
  },
});
