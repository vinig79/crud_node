module.exports = {
    async redirects() {
      return [
        {
          source: '/old-blog/:slug*',
          destination: '/blog/:slug*',
          permanent: true,
        },
      ]
    },
  }
  