import globals from 'globals';
import pluginJs from '@eslint/js';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ...pluginJs.configs.recommended,
    settings: {
      react: { version: 'detect' },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...fixupConfigRules(pluginReactConfig),
  eslintPluginPrettierRecommended,
  {
    rules: {
      'arrow-body-style': ['error', 'always'],
    },
  },
];
