module.exports = {
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    production: {
      presets: [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
        },
        '@babel/preset-react',
      ],
      ignore: ['*.spec.js'],
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        'babel-plugin-transform-react-remove-prop-types',
        { mode: 'wrap' },
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
          '@babel/preset-react',
        ],
      ],
    },
  },
};
