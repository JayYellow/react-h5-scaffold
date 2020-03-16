const {
  override,
  addPostcssPlugins,
  fixBabelImports
} = require("customize-cra");

module.exports = override(
  addPostcssPlugins([
    require("postcss-normalize")({ "forceImport": true }),
    require("postcss-preset-env")({ "stage": 0 }),
    require("postcss-px-to-viewport")({
      "viewportWidth": 375,
      "viewportHeight": 667,
      "unitPrecision": 3,
      "viewportUnit": "vw",
      "selectorBlackList": [".ignore", ".hairlines"],
      "minPixelValue": 1,
      "mediaQuery": false
    }),
  ]),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: 'css'
  })
);