# CSS Style Guide

## General Guidelines for CSS Code

### Readability

- As with any code, ensure CSS code is optimized for human reading
- Use descriptive class/variable names and consistent naming conventions
- Use tools like *prettier* to maintain well-formatted CSS files
- Leave comments in CSS code when necessary

### Component Libraries

- The usage of component libraries like *Ant Design* or *MUI* is encouraged
- Integrate with the library's theme system to provide base design and components for your app

### DRY

- Do not copy-paste similar CSS or components
- Extract common code into a new component where necessary
- Use utility CSS classes where appropriate
- Extract variables for reusing common colors, fonts, metrics, etc.

### CSS Modularity

- Avoid using global styles and selectors (unless there is a good reason for it, e.g. global variables for theming, utility classes)
- Keep component's CSS by the component, e.g. using CSS modules

### Pre-processors, CSS in JS

- Feel free to use pre-processors or CSS in JS libraries like *less*, *styled-components* while maintaining best practices

### Responsive Design

- Use a grid or breakpoint system when a component library offers one
- Prefer *flexbox* and *grid* over *floats* and *tables*
- Write mobile-first *media-queries*

### Accessibility

- Prefer using relative units like **(r)em**, percentiles, etc. over pixels, especially when defining font size

### `!important`

- Use this CSS feature only as a last resort (e.g., forcing external styles when there's no other workaround)

### Cross-browser compatibility

- When using newer CSS features check if it is supported in all desired browsers including mobile ones
- Either test it directly or use tools like [https://caniuse.com/](https://caniuse.com/)

### Dead Code

- When cleaning up JavaScript/HTML code, remember to remove unused CSS as well
