/**
 * @file config.js
 */

// Vendors
const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsDirectory: 'dist',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    assetsRoot: path.resolve(__dirname, '../dist'),

    development: {
        port: 4000,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {
            '/labor-analgesia': 'http://localhost:4100'
        }
    },

    production: {
        port: 4002,
        index: path.resolve(__dirname, '../dist/index.html'),
        proxyTable: {
            '/labor-analgesia': 'http://localhost:4100'
        }
    }

};
