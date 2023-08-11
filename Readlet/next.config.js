module.exports = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: 'your_mongodb_uri',
    JWT_SECRET: 'your_jwt_secret',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap');
    }

    return config;
  },
};