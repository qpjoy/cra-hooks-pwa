const path = require("path");
const { paths } = require("react-app-rewired");

const {
  override,
  //   fixBabelImports,
  addDecoratorsLegacy,
  addPostcssPlugins,
  addWebpackAlias,
  addWebpackModuleRule,
  // addLessLoader
} = require("customize-cra");

const config = require(`${paths.scriptVersion}/config/webpack.config.js`)(
  process.env.NODE_ENV,
);

//生产环境去除console.* functions
const overridePlugins = () => {
  return config => {
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach(minimizer => {
        if (minimizer.constructor.name === "TerserPlugin") {
          //   minimizer.options.terserOptions.compress.drop_console = true
          minimizer.options.terserOptions.keep_fnames = true;
        }
      });
    }

    return config;
  };
};

module.exports = override(
  // 关于webpack的相关配置
  //   fixBabelImports("import", {
  //     libraryName: "antd",
  //     libraryDirectory: "es",
  //     style: true
  //   }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
  }),
  // addLessLoader({
  //   javascriptEnabled: true

  //   // modifyvars:
  // }),
  addWebpackModuleRule({
    test: /\.(scss|sass)$/,
    use: appendScssLoader([
      {
        loader: "sass-resources-loader",
        options: {
          resources: path.resolve(__dirname, "./src/assets/sass/global.scss"),
        },
      },
    ]),
  }),
  addPostcssPlugins([
    require("postcss-pxtorem")({
      rootValue: 100,
      propWhiteList: [],
      // unitPrecision: 5,
      // propList: ['*'],
      // selectorBlackList: [],
      // replace: true,
      // mediaQuery: false,
      // minPixelValue: 12
    }),
    require("cssnano")({
      autoprefixer: false,
      "postcss-zindex": false,
    }),
    require("postcss-write-svg")({
      utf8: false,
    }),
  ]),
  overridePlugins(),
);

function appendScssLoader(Loader) {
  let scssLoader = [...config.module.rules[2].oneOf[5].use, ...Loader];

  return scssLoader;
}
