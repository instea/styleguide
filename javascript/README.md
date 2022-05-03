# Javascript Style Guide

## Tools

### ESLint/Prettier

We use eslint and prettier to keep javascript code consistent across the projects.
Use following packages as a base for your eslint config:
- [@instea/eslint-config-react](./eslint-config-react/)
- [@instea/eslint-config-node](./eslint-config-node/)

## Rules

### Changing eslint config

ESLint configs above are supposed to provide a default configuration for the project.
However different teams might have different preferences, therefore if you agree to change the rule within the team feel free to overwrite it.
If the new rule is useful to other teams/projects please open a PR.

### Disabling eslint rules by comment

Sometimes it makes sense to disable eslint just in particular cases.
Please always leave a comment why you are disabling the rule.
Example:

```js
useEffect(() => {
  // ...

  // disabling eslint as it is supposed to run only when id changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [id]);
```
