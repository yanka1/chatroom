module.exports = {
  outputDir: process.env.VUE_APP_ENV_CONFIG === 'prod'?'dist':'dist_beta',
  devServer: {
    proxy:{
      "/api/v1": {
        // target: "https://open.api.mytoken.io",
        target: "http://127.0.0.1:7001",
        pathRewrite: { '^/api/v1': '' }
      }
    }
  },
  productionSourceMap: process.env.VUE_APP_ENV_CONFIG !== 'prod',
  css: {
    loaderOptions: {
      // pass options to sass-loader
      postcss: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
          plugins: [
            require('autoprefixer')({
              browsers: ['Android >= 4.0', 'iOS >= 7']
            }),
            require('postcss-pxtorem')({
              rootValue: 37.5,
              propList: ['*']
            })
          ]
      }
    }
  },
}