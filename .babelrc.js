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

const commonPlugins = [
    ['import', {
        'libraryName': 'antd',
        'libraryDirectory': 'es',
        'style': true
    }]
];

module.exports = {
    'env': {

        'development': {
            presets,
            plugins: [
                ...commonPlugins,
                'transform-import-sync'
            ]
        },

        'test': {
            'presets': [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        },

        'production': {
            presets,
            plugins: [
                ...commonPlugins,
                ['transform-react-remove-prop-types', {removeImport: true}]
            ]
        }

    }
};
