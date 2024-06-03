# Testing Guidelines

## General

- Code coverage is easy to measure but real test quality is more complicated than that, write test where it matters
- Write tests with highest customer value first (e.g. testing high-risk code, highly reused code or often used functionality)
- Writing unit tests is automatically considered to be a part of the developer's job
- Amount and type of testing depends on the situation and is discussed upfront with the customer
- Automated tests run as a part of CI/CD pipeline
- Manual feature testing must executed by the developer and should be also performed by the code reviewer
- Use four-eyes principle to enhance quality of the feature testing (one develops and test, another should test the feature)
- Maintenance of tests is part of the job, who breaks the test should also fix it
- All existing guidelines in this repo apply equally to testing-related code
