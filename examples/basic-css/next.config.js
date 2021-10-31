// // const withTM = require('next-transpile-modules')(['pages']);

module.exports = {
  // experimental: {
  //   externalDir: true,
  // },
  distDir: process.env.BUILD_DIR || '.next',
}
// // , 
// // withTM({});



// module.exports = {
//   // experimental: {
//   //   externalDir: true,
//   // },
//   distDir: process.env.BUILD_DIR || '.next',
// }



// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Important: return the modified config
//     return config
//   },
// }







// module.exports = () => {
//   return {
//     webpack(config, { defaultLoaders }) {
//       config.module.rules.push({
//         // test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         // include: [path.resolve(__dirname, '../../common/react/')],
//         // use: [defaultLoaders.babel],
//       })

//       /** Resolve aliases */
//       // aliasPathsToResolve.forEach((module) => {
//       //   config.resolve.alias[module.name] = module.path
//       // })
//     },
//     distDir: process.env.BUILD_DIR || '.next',
//   }
// }




// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       // test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       // use: [
//       //   options.defaultLoaders.babel,
//       //   {
//       //     // loader: '@mdx-js/loader',
//       //     // options: pluginOptions.options,
//       //   },
//       // ],
//     })

//     return config
//   },
//   // distDir: process.env.BUILD_DIR || '.next',
// }