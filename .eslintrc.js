module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname,'./vite.config.js'),
      },
    },
  },
};
