// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    cacheOnFrontEndNav: true,
    fallbacks: {
      document: '/',
    },
  },
});
