import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/kazali-arac-alim',
        destination: '/hizmetler/kazali-arac-alim',
        permanent: false,
      },
      {
        source: '/hasarli-arac-alim',
        destination: '/hizmetler/hasarli-arac-alim',
        permanent: false,
      },
      {
        source: '/pert-arac-alim',
        destination: '/hizmetler/pert-arac-alim',
        permanent: false,
      },
      {
        source: '/hurda-arac-alim',
        destination: '/hizmetler/hurda-arac-alim',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
