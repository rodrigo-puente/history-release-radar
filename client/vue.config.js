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
        args[0].meta = [
          {
              property: 'og:image',
              content: `${environment_url}/images/logos/my_logo.png`,
          },
          {
              property: 'og:image:width',
              content: '1200',
          },
          {
              property: 'og:image:height',
              content: '1200',
          },
        ];
        return args;
      });
  },
};
