/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Changed to false because editor is not showing dropdown
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/creator',
        destination: '/creator/home',
        permanent: true
      },
      {
        source: '/creator/create',
        destination: '/creator/create/post',
        permanent: true
      }
    ]
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
