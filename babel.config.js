module.exports = function (api) {
  api.cache(false)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
            ASSETS: './assets',
            CORE: './src/Core',
            Layouts: './src/Core/Layouts',
          },
        },
      ],
    ],
  }
}
