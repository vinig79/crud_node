module.exports = {
    async redirects() {
      return [
        {
          source: './index.js',
          destination: '/',
          permanent: false,
        },
      ];
    },
  };