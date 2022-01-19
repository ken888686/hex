module.exports = {
  root: true,
  env: {
    node: true,
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
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base'],
  // plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'prefer-destructuring': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': [
      'error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
};
