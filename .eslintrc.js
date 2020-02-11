module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['babel', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx'] },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/arrow-parens': 0,
    'react-hooks/exhaustive-deps': 'warn',
  },
};
