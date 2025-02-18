/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Module Federation
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          // match the name & URLs from remote apps
          products: `products@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
          basket: 'basket@http://localhost:3002/remoteEntry.js'
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
          // Add other shared libs here if needed
        }
      })
    );

    return config;
  }
};
