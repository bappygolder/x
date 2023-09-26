module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended', // Add React rules
    'plugin:jsx-a11y/recommended', // Add accessibility rules
    'plugin:@next/next/recommended', // Add Next.js rules
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Your custom rules or overrides here
    'linebreak-style': ['error', 'unix'],
    // Add any other project-specific rules
  },
  settings: {
    // Configure the Next.js version (optional)
    react: {
      version: 'detect',
    },
  },
};
