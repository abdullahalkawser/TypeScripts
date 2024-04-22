// const prices = 20090

// console.log('heloww how are yougffghghhhhhhhh', prices)


// const hanle = ()=>{
//     console.log('arooo function')
// }
// hanle()




//type of typscrift 


// let plyer = 'masrafiii';
// plyer = 980;  Type 'number' is not assignable to type 'string'
// console.log(plyer)


// let plyer = 'masrafiii';
// let age= 90;

// age = '980'; //Type 'string' is not assignable to type 'number'.
// console.log(plyer)


// let plyers; // declaretion lkore
// plyers = 'kawser'; // assent koraa
// plyers = 39;

// console.log(plyers)


// function 

//a: number,b: number

// function multipy(a: number,b: number) {
//     return a*b
    
// }

// console.log(multipy(3,4))


/// Array 

// let arryssss = ['dhaka','apple']
// arryssss.push(23) //Argument of type 'number' is not assignable to parameter of 


// let arryssss = []
// arryssss.push(23) 
// arryssss.push('abvdhggc') 

// console.log(arryssss)

//object 

// let person = {
//     name: 'abdullah',
//     age: 120,
//     country: 'bangladesh'
// }
// person.isloading = 'ture'// Property 'isloading' does not exist on type '{ name: string; age: number; country: string; }'.ts(2339)

// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:

// let firstName = "Dylan";


//Explicit Type


// let firstName: string = "Dylan"; // type string

// console.log(typeof firstName);



//Array

// const names: string[] = [];
// names.push("Dylan"); 

// const age: number[] = [];
// age.push("Dylan"); //Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)


// const a:( string | number)[] = [];
// a.push("Dylan",78); 

//object
// let c : {
//     name : string,
//     age : number
// }

// let c : object;

// c = [2,3,4,454,] // array is objcet


// c= {
//     name: 'abdullah',
//     age:23

// }



// dynanic type  any

// let a: any; //anny

// a = "string";
// a = 4;

//array

// let a: any [] =[];

// a.push('bangladesh')
// a.push(90)

//object

// let a: {
//     name:any;
//     age:any
// };

// a ={
//     name: 90,
//     age: 'banhjdg'

// }


// function 


// void
//Void (ভয়োইড): টাইপস্ক্রিপ্টে, "void" হল কোনও মান ফেরত না দেওয়া ফাংশনের রিটার্ন টাইপ। এটি দেখায় যে ফাংশনটি কোনও মান ফেরত না দেয়।

// + undifine 
// Undefined (আনডিফাইন্ড): "Undefined" হল একটি টাইপ এবং এটি জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্টের মধ্যে মান হিসাবে প্রয়োগ করা হয়। এটি একটি মানের অনুপস্থিতি নির্দেশ করে। এটি তার ভ্যারিয়েবলগুলির অনুপস্থিতি বোঝানোর জন্য ব্যবহৃত হয়, যেমনঃ ভ্যারিয়েবলগুলি যে কোনও মান অ্যাসাইন করা না হওয়ায়।





// //
// //function addNumbers(num1: number, num2: number): number {
//     return num1 + num2;
// }

// the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
//   }

// function multiply(a: number, b: number) {
//     return console.log(a * b);
//   }
// multiply(5,6)

// function multiply(a: string, b: string) {
//     return console.log(a,b);
//   }
// multiply('a','b')





//Type Aliases 
// টাইপ এলিয়াস (Type Aliases) হল টাইপস্ক্রিপ্টের একটি ফিচার যা আপনাকে একটি টাইপের নতুন নাম তৈরি করতে দেয়। এটি কমপ্লেক্স টাইপ ডিফিনিশন সহজে করে তুলতে এবং ডেভেলপমেন্ট প্রসেস সুবিধাজনক করতে পারে

// type CarYear = number
// type CarType = string
// type CarModel = string

// type Car = {
//     year: CarYear,
//     type: CarType,
//     model: CarModel
//   }


//ফাংশন সংজ্ঞা (Function Signatures) টাইপস্ক্রিপ্টে একটি ফাংশনের ডেটা টাইপ ও রিটার্ন টাইপ সংজ্ঞান করে। এটি বিশেষভাবে টাইপস্ক্রিপ্ট কোডের কমপ্লেক্সিটি বা ডেটা পরিবর্তনের পর কোডের সহজেই অবদান রাখে

// ফাংশনের সাইনেচার এবং ফাংশনের নাম ও সাইনেচার সংজ্ঞানা

// let multiply: (x: number, y: number,c: string) => number;

// multiply = (x: number, y: number,c: string) => {

//     if (c==="add") {
//         return x + y;
        
//     }  else{
//         return x - y;
//     }
  
    
// };
// console.log(multiply(2,9,'adds'))



// let userDetails : (id: number| string, userinfo:{
//     name: string, name chne koreaa jbee nah
//     age: number
// })=> void;
// userDetails = (id: number|string, user:{
//     name: string,
//     age:number
// })=>{

//     console.log(`User ID: ${id}, Name: ${user.name}, Age: ${user.age}`);

// }
// userDetails(1238900, { name: "John", age: 30 });



//টাইপস্ক্রিপ্টে ক্লাস ব্যবহার করে আপনি অবজেক্ট তৈরির ব্লুপ্রিন্ট নির্ধারণ করতে পারেন, যেখানে প্রপার্টি এবং মেথড থাকবে। এটি ডেটা এবং ব্যবহার একত্রে নিবন্ধন করার একটি উপায় প্রদান করে

// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person1 = new Person("Alice", 30);
// const person = new Person("abdulklah", 39);
// const  pay: Person[] = []
// const res = pay.push(person,person1)
// console.log(res)
// // console.log(person1)


//public অ্যাক্সেস মডিফায়ার

// class Person {
//     private name: string;

//     public age: number;
//     readonly country : string;

//     constructor(name: string, age: number,country: string) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. and my country is ${this.country}`);
//     }
// }



// const person1 = new Person("Alice", 30,'bangladesh');

// // person1.country ='dha'//annot assign to 'country' because it is a read-only property.ts(2540)
// console.log(person1)


// short cart

// class Person {
  

//     constructor(
//         private name: string;

//         public age: number;
//         readonly country : string;
//     ) {}

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. and my country is ${this.country}`);
//     }
// }



// const person1 = new Person("Alice", 30,'bangladesh');

// // person1.country ='dha'//annot assign to 'country' because it is a read-only property.ts(2540)
// console.log(person1)



///Module System

import {Person} from "./classs/class.js"
 const person1 = new Person("Alicessss", 30,'bangladesh');
 console.log(person1)







