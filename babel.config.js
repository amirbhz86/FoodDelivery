

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'animations': './src/animations',
          'common': './src/common',
          'screens': './src/screens',
          'assets': './src/assets',
          'hooks': './src/hooks',
          'navigation': './src/navigation',
          '@redux': './src/redux',
          'services': './src/common',
          'helper': './src/helper',
          'api': './src/api',
          "components": "./src/components",
        },
      },
    ],
  ],
}
