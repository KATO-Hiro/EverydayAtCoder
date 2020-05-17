// See:
// https://qiita.com/syuji-higa/items/931e44046c17f53b432b#1-1-nextjs-%E3%81%AE%E8%A8%AD%E5%AE%9A
const { resolve } = require('path');

// See:
// https://github.com/benzguo/nextjs-now-firebase/blob/master/next.config.js
require("dotenv").config();

// See:
// https://medium.com/@uvictor/simple-firebase-authentication-with-next-js-using-hoc-higher-order-components-8e8931d25cfa
// https://nekorokkekun.hatenablog.com/entry/2019/09/25/000041#%E3%82%B5%E3%82%A4%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%92%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B
const path = require("path");
const Dotenv = require("dotenv-webpack");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src')

    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config
  },
};

module.exports = nextConfig;
