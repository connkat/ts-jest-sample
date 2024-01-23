# Sample Project using ts-jest

Go checkout the [main repo](https://github.com/mtiller/ts-jest-sample) for a bigger picture view of how to use jest with TS

I have edited this README and repo reflect the work that would need to be done to successfully add and run tests on your own existing TS project.

## Basic Setup

### Module and Dependencies

I install `typescript`, `jest`, `ts-jest` and `@types/jest` as dependencies (if you haven't already):

```sh
$ yarn add -D typescript jest ts-jest @types/jest
```

You'll also need to install jest types as a dev-dependency

```sh
yarn add  @types/jest --dev
```

Note: if you want to test your functions like you would in JS using the `node` command (like: `node functions.js`), you need to install ts-node globally. Then you can use it the same way, ie `ts-node functions.ts`.

```sh
yarn add ts-node -g
```

### File Structure

- Create a folder at root level called `tests` or `___tests___`.
- Your file structure of your folder should imitate your src structure, EX:

```
src/components/Header.tsx
src/components/Footer.tsx
```

should be set up the same for tests:

```
tests/components/Header.test.ts
tests/components/Footer.test.ts
```

If your functions are in their own file/dir, go ahead and use that, EX:
```
src/helperFunctions
tests/helperFunctions
```

### Test Structure

- Each file should be the same name as the file that it is testing
- Each describe should focus on a singular function, and that function should be in the name (I prefer to make the describe only the function name)
- Each test will be looking for a single result.

Here is a good naming convention for tests:
`returns ABC when XYZ` -> `returns a User when given correct params`
`errors ABC when XYZ` -> `errors when given special characters`


### Configuring Jest

At this point, I'd like to run that test. But first I need to create a `jest.config.js`
file for all my `jest` settings. This has to take into account the fact that I'm using
`ts-jest` and the fact that my tests are stored in `__tests__`. So the resulting file
looks like this:

```js
module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```

### Scripts

I then add the following scripts to `package.json`:

```json
  "scripts": {
    "compile": "tsc",
    "test": "jest"
  }
```

At this point, if I run `yarn test`, you should see if a test is passing or failing:

```
 PASS  __tests__/base.spec.ts
  This is a simple test
    ✓ Check the sampleFunction function (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```
### Debugging

- Something to keep in mind is that you can use console.log in your functions to test the results of your test that you a running and it will appear alongside the results of your test. 

- You can add `.skip` to a test/describe to skip it: 
```
test.skip("returns user when username is found"...
describe.skip("findUserByUsername", () => {...
```

- You can use `.only` to skip all other tests and focus on only that one test/description: 
```
test.only("returns user when username is found"...
describe.only("findUserByUsername", () => {...
```