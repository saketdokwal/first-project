// // let person ={name:"saket" , age:28};
// // console.log(person)
// var obj {
//     name: "saket",
//     age: 27,
//     isabove: true,
// };

// let a=10;
// if (a>10){
//     console.log("a number is larger")
// }
// else if (a<=10){
//     console.log("a number is equal to the given no")
// }
// else{
//     console.log("a is smaller than the given no")
// }
// let saket=100;
// if (saket<50){
//     console.log("less than 50")
// }
// else if (saket>80){
//     console.log("greater than 80")
// }
// else {
//     "neither the condition matches"
// }
// Switch Statement
//Switch Statement

// let day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");

//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");

//     break;

//   case "Wednesday":
//     console.log("Today is Wednesday");

//     break;

//     case "Thursday":
//         console.log("today is Thursday");

//   default:
//     console.log("I do not know, what day it is!!");
// }
// local scope
// function counter(){
// var myVariable ="I am a local scope"
// console.log(myVariable)
// }
// counter()
// Global Scope
// var myVariable = "I am a Global Scope"
// function counter(){
//   console.log(myVariable)
// }
// counter()
// const add=(x,y)=>x*y;
// console.log(add(2,3));
// const mult=(x,y)=>x*y;
// console.log(mult(7887,4465));
// const div=(x,y)=>x/y;
// console.log(div(8,2));
// var age=20;
// var obj=(age<=18) ? "You are an adult" : "you are a minor";
// console.log(obj)
// let month="March";

// switch(month){
//   case 1 :"January";
//   break;
//   case 2 :"Febuary";
//   break;
//   case 3 :"March";
//   break;
//   case 4:"April";
//   break;
//   default:"None of the month is existed"
// }
// console.log(month);
// let a, b, rest;
// [a,b]=[10,20];

// console.log(a);
// console.log(b);
// [a,b,...rest]=[10,20,30,40,50];
// console.log(rest);
// teplate literals
// const name="saket";
// const age=32;
// const message=(`Hello my name is ${name} and i am ${age} years old`);
// console.log(message);
// Spread operator(`...`)
// array example
// const arr1=[1,2,3];
// const aar2=[...arr1,4,5,6];
// console.log(aar2);

// object example for spread operator

// const obj1={
//     Gender:"Male",
//     Age:"26"
// };
// const obj2={
//     Name:"Saket",...obj1
// };
// console.log(obj2);

// Function exapmle

// function counter(){
//     var myVariable ="I am a local scope";
//     console.log(myVariable)

// }
// counter()

// GlobaL Scope= In global scope we have to make variable before the function

// var myVariable ="I am a Global Scope";
// function counter(){
//     console.log(myVariable)
// }
// counter()

// Assignment operator
// var a=10;
// var b=3;
// a**=b;
// console.log(a);
// for loop
// for (let saket=0;saket<5;saket++){
//     console.log(saket)
// }
// Spread Operator   //array Example
// const arr1=[1,2,3];
// const arr2=[...arr1,4,5,6,7];
// console.log(arr2);
// Object Example Spread operator
// const obj1={Gender:"Male",age:23};
// const obj2={name:"Saket",...obj1};
// console.log(obj2);

//Loops in javaScript
// // for loop
// for(let i=0;i<=5;i++){
//     console.log(i);
// }
// While Loop:
// let j=0;
// while(j<5){
//     console.log(j)
//     j++;
// }
// Do While Loop

// let k=0;
// do{
//     console.log(k)
//     k++
// }
// while(k<5)

    // Looping through an array
    // example 1:
// const counter=[1,2,3,4,5,6,7];
// for(let i of counter){
//     console.log(counter[5])
// }  
// // example 2: 
// const arr=["saket","suraj","Himanshu"];
// for(let item of arr){
//     console.log(arr)
// }
// lopping through object

// const obj={a:1,b:2,c:5,d:8}

// for (let key in obj){
//     console.log(`${key}:${obj[key]}`)
// }

// Function with multiple arguments
// function sum(){
//     let sum=0;
//     for(let i in arguments){
//         sum+=arguments[i];
//     }
//     console.log(sum)
// }
// sum(10,20)
// sum(10,20,30)
// sum(10,20,30,40)

// rest operator : if we want to print numbers with the sring then we use rest operator
// function sum(name,course,...args){
//     console.log(arguments);
//     document.write(`hello ${name} of ${course}:`);
//     let sum=0;
//     for(let i in args){
//         sum+= args[i];
//     }
//     document.write(sum+"<br>");
// }
// sum("saket","Btech",20,30,40);
// sum("namit","BA",44,55);

// for in loop in javascript

// var obj={
//     firstName:"Saket",
//     lastName:"Dokwal",
//     Age:26,
//     email:"saketd41@gmail.com"
// };
// for(var key in obj){
//     console.log(key + ":" +obj[key]);
// }

// nested loop in js

// for(var a=1;a <=100;a=a+10){
//     for(var b=a;b<a+10;b++){
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }
// Classes in javascipt

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     him(){
//         console.log(`hello , My name is ${this.name} and my age is ${this.age}`)
//     }
// }
// const obj=new person("Saket",26);
// obj.him();

// class game{
//     constructor(sport,instrument){
//         this.sport=sport;
//         this.instrument=instrument;
//     }
//     play(){
//         console.log(`I am a ${this.sport} player and i do ${this.instrument} `)
//     }
// }
// const obj=new game("cricket","batting");
// obj.play();

// class hello{
//     message(){
//         console.log("Hello everyone");
//     }
//     sorry(){
//         console.log("Sorry everyone");
//     }
// }
// let a = new hello();
// a.message();
// a.sorry();

// class student{
//     constructor(name,age){
//         this.studentname=name;
//         this.studentage=age;
//         console.log("constructor function");
//     }
//     hello(){
//         console.log(`Hello ${this.studentname}     Your age is ${this.studentage}`);
//     }
// }
// let a = new student("Saket",26);
// let b = new student("Namit",27);
// a.hello();
// b.hello();

// Class Inheritance

// class employee{
//     constructor(name,age,salary){
//         this.empname=name;
//         this.empage=age;
//         this.empsalary=salary;
//         console.log("constructor :employee");
//     }
//     info(){
//         document.write(`<h3>Employee Class</h3>
//         Name:${this.empname} <br>
//         Age:${this.empage} <br>
//         Salary:${this.empsalary}
//         <br>
//         `)
//     }
// }
// class manager extends employee{
//     info(){
//         let ta=1000;
//         let pa=300;
//         let totalsalary=this.empsalary+ta+pa;

//         document.write(`<h3> Manager Class</h3>
//         Name:${this.empname}<br>
//         Age:${this.age}<br>
//         Salary:${totalsalary}
//         `)
//     }
// }
// let a= new manager("Saket",26,20000);
// let b= new employee("namit",26,15000);

// a.info();
// b.info();

// Inheritance class Example 2:
// class peron{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
//     }
// }
// class employee extends peron {
//     constructor(name,age,JobTitle)
// {
//     super(name,age)
//     this.JobTitle=JobTitle;
//     }
//     work(){
//         console.log(`${this.name} is working as a ${this.JobTitle}.`)
//     }

// }
// const employee1=new employee("SAKET",27,"Full Stack Developer");
// employee1.greet();
// employee1.work();

// inheritance example 3:

// class person {
//     constructor(name,age,rollno){
//         this.name=name;
//         this.age=age;
//         this.rollno=rollno;
//     }
//     greet(){
//         console.log(`Hello,My name is ${this.name} ,my age is ${this.age} and my rollno is ${this.rollno} `)
//     }
// }

// class employee extends person {
//     constructor(name,age,rollno,jobtitle){
//         super(name,age,rollno)
//         this.jobtitle=jobtitle;
//     }

// Work(){
//     console.log(`${this.name} is working as a ${this.jobtitle}.`)
// }
// }
// const employee1=new employee("Saket",26,21,"Developer")
// employee1.greet();
// employee1.Work();
// practicing
// var x=50;

// console.table([1,2,3]);

// console.time("Test");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.warn("This is warning");
// console.timeEnd("Test");

// logical operator
// and operator:Run only when both the conditions are true

// var age=20;
// if(age>=18 && age<=21){
//     console.log("Yes you are eligible");
// }

// OR operator:

// var age=22;
// if(age>=18 || age<=21){
//     console.log("yes you are eligible");
// }
// example second of or operator
// var a=10;
// var b=15;
// if(a>=8||b<=14){
//     console.log("yes you are eligible");
// }

// not operator
// var a=30;
// var b=15;
// console.log(!a>=12);

//if else statement

// var name="Saket";
// var gender="Male";
// if(gender== "Male"){
//     console.log("Hello Mr." + name);
// }
// else{
//     console.log("Hello Miss."+name);
// }

// Encapsulation 
class person{
    constructor(name,age){
        this._name=name;
        this._age=age;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if(newName){
            this._name=newName;
        }
    }
    displayDetail(){
        console.log(`Name: ${this._name} and age: ${this._age}`);
    }
}
const person1= new person("John , 30");
console.log(person1.name);
person1.name="jane";
console.log(person1.name);
person1.displayDetail();
