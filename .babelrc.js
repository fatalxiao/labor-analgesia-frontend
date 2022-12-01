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

        'production': {
            presets,
            plugins: [
                ['transform-react-remove-prop-types', {removeImport: true}]
            ]
        }

    }
};
