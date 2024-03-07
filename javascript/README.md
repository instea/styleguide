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

### React conditional rendering

Idiomatic React conditional rendering is preferred over custom properties that do not have another purpose

```jsx
// Good
<>{ condition && <Field .... /> }</>

// Bad
<Field visible={condition} ... />
```

### Use of hooks

#### useCallback

`useCallback` should not be used by default but only when there is a need for it, for instance:

- the rerendering of a component was identified as a performance bottleneck
- it's a result of a reusable hook
- there is a semantic need (for example if useEffect shouldn't be called on every render)

#### useEffect

- by default all the dependencies should be listed
- if appropriate, it may be used with only "listen to change" dependencies, but it has to be carefully considered and documented why

## Other Guidelines

### Cross-browser compatibility

- When using newer JS features check if it is supported in all desired browsers including mobile ones
- Either test it directly or use tools like [https://caniuse.com/](https://caniuse.com/)
- Include polyfills if there are chances for such issues
