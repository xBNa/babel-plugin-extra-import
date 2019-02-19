module.exports = function (api) {

    api && api.cache(false)

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    loose: true,
                    modules: 'commonjs'
                }
            ]
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    helpers: false,
                    regenerator: false
                }
            ],
            // '@babel/plugin-syntax-dynamic-import',
            // '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-object-rest-spread'
        ]
    }
}
