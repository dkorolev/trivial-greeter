function greet(name) {
  if (name) {
    return `Hello, ${name}!`;
  }
  return "Hello World!";
}

module.exports = greet;
