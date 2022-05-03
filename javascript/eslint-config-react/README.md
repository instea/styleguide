# @instea/eslint-plugin-react

Default ESLint rules for React projects.

## Installation

```
yarn add --dev prettier eslint

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
