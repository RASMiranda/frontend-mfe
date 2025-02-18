/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'products',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProductsList': './components/ProductsList.tsx'
        },
        shared: {
          react: {
            singleton: true,
            eager: true
          },
          'react-dom': {
            singleton: true,
            eager: true
          }
        }
      })
    );
    return config;
  }
};
