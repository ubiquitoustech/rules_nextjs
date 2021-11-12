module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.symlinks = false;
    config.cache = false;
    config.watchOptions.followSymlinks = true;
    return config;
  },
  distDir: process.env.BUILD_DIR || ".next",
};
