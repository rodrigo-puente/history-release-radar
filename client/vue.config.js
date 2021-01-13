// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Release Radar';
        args[0].url = 'https://release-radar.rodrigopuente.com';
        return args;
      });
  },
};
