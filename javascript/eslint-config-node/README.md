# @instea/eslint-plugin-node

Default ESLint rules for Node.js projects.

## Installation

```
yarn add --dev prettier eslint

yarn add --dev @instea/eslint-config-node
```

## Usage

Extend from this plugin in eslint configuration:

```
{
  "extends": ["@instea/node"]
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
