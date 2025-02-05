// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

// class Car{
//     constructor(name,years) {
//         this.name = name;
//         this.years = years;
//     }
//     age() {
//         const date = new Date();
//         return date.getFullYear() - this.years
//     }
// }

// const obj = new Car("Hurshidbek", 1993)
// console.log(obj.age());
// document.getElementById("ethan").innerHTML =  obj.age() 

/////////////////

// class Car{
//     constructor(brand){
//      this.brand  = brand
//     }

//     person() {
//         return "I have a"+ this.brand
//     }


   
// }
// class Child extends Car  {
//     constructor(brand,model) {
//         super(brand)
//         this.model = model
//     }

//     show() {
//         return this.person() + " Child cals =>" + this.model
//     }
// }

// const obj = new Child("Matiz", "Dewo")
// console.log(obj.show());
////////////////////////
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//      static hello(x) {  // static method
//       return "Hello!!" + x.carname;
//     }
//   }
  
//   mycar = new Car("Ford");

  
//   //Call 'hello()' on the class Car:
// document.getElementById("ethan").innerHTML = Car.hello(mycar);// staticfolderga aylanadi
// /////////////////////////////////////////
// export default Car
