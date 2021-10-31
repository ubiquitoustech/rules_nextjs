// const fs = require('fs')
// const path = require('path');

module.exports = {
  // experimental: {
  //   externalDir: true,
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.symlinks = false
    return config
  },
    // config.watch = true
  //   // the problem seems to be around symlinks in webpack an if it can actually see the file correctly

  //   // config.resolve.alias.push( {
  //   //   "pages": helpers.root("pages")
  //   // }

  //   // config.resolve.modules.push( {
  //   //   path.resolve('./app'),
  //   //   path.resolve('./node_modules'),
  //   //   path.resolve('./vendor'),
  //   //   path.resolve('../my_symlinked_packages/node_modules')
  //   // }


  //   config.module.rules.push({
  //     resolve: {
  //       alias: {
  //         pages: path.resolve(__dirname, 'pages'),
  //         component: path.resolve(__dirname, 'component'),
  //       }
  //     }
  //   }
  //   )

  //   // )
  //   // config.module.rules.push(
  //   //   {
  //   //     test: /\.js?$/,
  //   //     include: includePaths,
  //   //     use: [defaultLoaders.babel],
  //   //   }, {
  //   //     test: /\.jsx?$/,
  //   //     include: includePaths,
  //   //     use: [defaultLoaders.babel],
  //   //   },{
  //   //     test: /\.json?$/,
  //   //     use: [defaultLoaders.babel],
  //   //   }, 
  //     // {
  //     //   test: /\.css$/,
  //     //   loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
  //     // }
  //   // )
  //   return config
  // },
  distDir: process.env.BUILD_DIR || '.next',
}


// var includePaths = [
//   fs.realpathSync(__dirname + '/pages'),
//   fs.realpathSync(__dirname + '/component'),
//   fs.realpathSync(__dirname + '/node_modules'),
// ];

// distDir: process.env.BUILD_DIR || '.next',