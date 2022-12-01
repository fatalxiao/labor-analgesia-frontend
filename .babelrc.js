/**
 * @file .babelrc.js
 */

const presets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            useBuiltIns: 'usage',
            corejs: 3,
            targets: {
                'safari': '7',
                'ie': '9'
            }
        }
    ],
    '@babel/preset-react'
];
const packagePlugins = [
    ['transform-react-remove-prop-types', {removeImport: true}]
];
const packageConfig = {
    presets,
    plugins: packagePlugins
};

module.exports = {
    'env': {

        'development': {
            presets,
            plugins: [
                'transform-import-sync'
            ]
        },

        'test': {
            'presets': [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        },

        'production': packageConfig

    }
};
