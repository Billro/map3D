
// ref: https://umijs.org/config/
export default {
  targets: {
    ie: 11,
    chrome: 49,
    firefox: 45,
    safari: 10,
    edge: 13,
    ios: 10
  },
  treeShaking: true,
  // theme: "./src/themes.js",
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'geoTest',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  exportStatic: {},
  proxy: {
    "/api": {
      target: "http://zongzi.ddns.net:18899",
      changeOrigin: true,
      pathRewrite: { "^/api" : "" },
    }
  }
}
