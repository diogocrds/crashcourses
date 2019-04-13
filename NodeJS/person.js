class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and i'm ${this.age}`);
  }
}

// const Person = require('./person'); //common js

const p1 = new Person('JD', 25);

p1.greeting();

// module.exports = Person;
