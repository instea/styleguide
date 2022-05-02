module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:prettier/recommended", "react-app"],
  plugins: ["prettier", "react-hooks", "import"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "function-paren-newline": "off",
    "import/default": "error",
    "import/no-extraneous-dependencies": ["error"],
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: ["builtin", "external", ["sibling", "parent"], "index"],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": "off",
    indent: "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-confusing-arrow": "off",
    "no-mixed-operators": "off",
    "no-plusplus": "off",
    "object-curly-newline": "off",
    "prefer-template": "error",
    "prettier/prettier": "error",
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react/forbid-prop-types": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-indent": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-multi-comp": "off",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/sort-comp": "off",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
};
