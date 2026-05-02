module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // QUAN TRỌNG: disable rule conflict với Prettier
    'prettier',
  ],
  rules: {
    // Prettier error sẽ hiện như ESLint error
    'prettier/prettier': 'error',

    // Rule thực tế công ty hay dùng
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',

    'no-console': 'warn',
    'prefer-const': 'error',
  },
};
