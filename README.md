# trivial-greeter

A trivial greeter function.

## Standalone usage (npx)

```sh
npx trivial-greeter
# Hello World!

npx trivial-greeter Alice
# Hello, Alice!
```

## Library usage

```sh
npm install trivial-greeter
```

```js
const greet = require("trivial-greeter");

console.log(greet());        // Hello World!
console.log(greet("Alice")); // Hello, Alice!
```

## Publishing

```sh
npm login
npm publish
```
