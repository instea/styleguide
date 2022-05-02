# @instea/eslint-plugin-react

Default ESLint rules for React projects.

## Installation

```
yarn add --dev prettier eslint\
  eslint-config-prettier\
  eslint-config-react-app\
  eslint-plugin-import\
  eslint-plugin-prettier\
  eslint-plugin-react\
  eslint-plugin-react-hooks\
  eslint-plugin-jsx-a11y\
  eslint-plugin-flowtype

yarn add --dev @instea/eslint-config-react
```

## Usage

Extend from this plugin in eslint configuration:

```
{
  "extends": ["@instea/react"]
}
```

Create `.prettierrc` file with this content:

```
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "es5",
  "arrowParens": "avoid"
}
```

Run eslint using yarn:

```
yarn eslint .
```
