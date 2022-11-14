/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/creator',
        destination: '/creator/home',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
