import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  serverExternalPackages: ['nodemailer'],
  outputFileTracingIncludes: { '/*': ['./src/content/**/*.json', './src/server/migrations/*.sql'] },
  outputFileTracingExcludes: {
    '/*': [
      './legacy/**',
      './docs/**',
      './tests/**',
      './scripts/**',
      './out/**',
      './data/**',
      './.env*',
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default config;
