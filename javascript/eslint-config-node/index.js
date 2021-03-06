module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:node/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    quotes: [
      "warn",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "object-curly-newline": "off",
    "no-confusing-arrow": "off",
    "arrow-parens": "off",
    "arrow-body-style": ["warn", "as-needed"],
    "function-paren-newline": "off",
    indent: "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "prettier/prettier": "warn",
    "node/no-unpublished-require": "off",
    "global-require": "off",
  },
};
