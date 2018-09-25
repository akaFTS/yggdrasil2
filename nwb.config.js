module.exports = {
  type: 'react-app',
  babel: {
    plugins: ['import-graphql'],
  },
  webpack: {
    rules: {
      css: {
        url: false,
      },
    },
  },
}
