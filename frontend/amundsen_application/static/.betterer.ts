import { eslint } from '@betterer/eslint';

export default {
  eslint: eslint({
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/order': 'error',
    'no-case-declarations': 'error',
    'no-extra-boolean-cast': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-restricted-globals': 'error',
    'no-script-url': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-did-update-set-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/sort-comp': 'error',
    'react/static-property-placement': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
  }).include('./js/**/*.{ts,tsx,js,jsx}'),
};
