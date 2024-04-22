 export class Person {
    private name: string;

    public age: number;
    readonly country : string;

    constructor(name: string, age: number,country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. and my country is ${this.country}`);
    }
}