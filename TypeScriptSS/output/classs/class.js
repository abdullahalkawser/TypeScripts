export class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. and my country is ${this.country}`);
    }
}
