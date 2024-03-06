# General Guidelines

## Principles

- Don't try to reinvent the wheel, use and contribute to the open source
- Code is read much more often than it is written, exercising clean code matters to us
- Refactoring and unit testing is part of the job, do it when needed
- Optimize code for people first, beware of premature optimization
- Use tools to enforce code style and good practices
- Clean up unused code and don't design ahead
- Keep documentation close to the code. Best documentation is a good name
- Stick to the best practices and follow proven software principles (KISS, SOLID, DRY, YAGNI, ...)

## SonarCloud

It is encouraged to set up and use [SonarCloud](https://sonarcloud.io) code checker on projects.

- Begin with the default Sonar rules that should be followed in most cases
- If there is a good reason, disable rules after agreement with the team
- Prefer strict Quality Gateway - zero new issues added
- Integrate Sonar as a quality step in the CI pipeline - e.g. run it on Pull Request
