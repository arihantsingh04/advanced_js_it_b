//*********BASIC CONSTRUCTOR***********
// class Classname{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new Classname("value1","value2");
// console.log(obj.prop1);
// console.log(obj.prop2);


// //*********CONSTRUCTOR WITH PARAMETERS***********
// class Dog{
//     constructor(name,weight,color,breed){
//         this.name = name;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("dog1",20,"black","bulldog");
// console.log(dog.name);
// console.log(dog.weight);
// console.log(dog.color);
// console.log(dog.breed);
// console.log(dog.name," is a ",dog.color+" "+dog.breed," and weighs ",dog.weight," kg.");


// //*********CONSTRUCTOR WITH DEFAULT VALUES***********
// class Person{
//     constructor(firstname,lastname='doe'){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("john");
// console.log(person1.firstname,person1.lastname); 


// //*********CONSTRUCTOR WITH DEFAULT VALUES AND PARAMETERS***********
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hello " + this.firstname + " " + this.lastname);
//     }
// }
// let person1 = new Person("John","Doe");
// person1.greet(); 


// //*********CONSTRUCTOR WITH DEFAULT VALUES AND PARAMETERS***********
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("hi there!");
//     }
//     compliment(name,object){
//         return "thats a wonderful "+object+" "+name+" !";
//     }
// }
// let compliment = new Person("John","Doe");
// console.log(compliment);
// let x =compliment.greet();
// console.log(x);


// class Person{
//     constructor(firstname,lastname){
//         if (firstname.startsWith("M")){
//             this.#firstname = firstname;
//         }
//         else{
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }
// }
// let person1 = new Person("John","Doe");

// getter and setter
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(name){
//         this.#firstname = name;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(name){
//         this.#lastname = name;
//     }
// }
// let person1 = new Person("John","Doe");
// console.log(person1.firstname);

// getter and setter with arguments
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(name){
//         this.#firstname = name;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(name){
//         this.#lastname = name;
//     }
// }
// let person1 = new Person("John","Doe");
// console.log(person1.firstname);


// parent class with 2 methods and 3 attributes
class Vehicle{
    constructor(color,currspeed,maxspeed){
        this.color = color;
        this.currspeed = currspeed;
        this.maxspeed = maxspeed;
    }
    move(){
        console.log("moving at speed of "+this.currspeed+" km/h");
    }
    accelerate(amount){
        this.currspeed += amount;
    }
}


class Motorcycle extends Vehicle{
    constructor(color,currspeed,maxspeed,fuel){
        super(color,currspeed,maxspeed);
        this.fuel = fuel;
    }
}
let motorcycle = new Motorcycle("red",50,100,"petrol");
console.log(motorcycle.color);
console.log(motorcycle.currspeed);
console.log(motorcycle.maxspeed);
console.log(motorcycle.fuel);
motorcycle.accelerate(20);
motorcycle.move();
