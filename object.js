// let student = {
//     fullName:'Anuj Modnwal',
//     Class:8,
//     printClass: function(){
//         console.log("class =",this.class);
//     }
// };

// console.log(student);

//there are two types of declare function in object
// const employee={
//     //1st
//     calcTax1(){
//         console.log("salary is 30% off");
//     },
//     //2nd
//     // calcTax2: function(){
//     //     console.log("salary is 30% off");
//     // }
// }

// const Anuj ={
//     salary:300000,
// };

// Anuj.__proto__=employee;

//constructor
// class toyota{
//     constructor(brand){
//         console.log("creating a new object");
//         this.newBrand = brand;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
    
// }

// let fortuner = new toyota('fortuner');

//Inheritance
// class Person{
//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problum,creat somthing");
//     }
// }

//let anujObj = new Engineer();

//practice Question

let data = "screat website";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data =",data);
    }
}

let student1 = new User("Anuj","anuj@gmail.com");
let student2 = new User("Monu","monu@gmail.com");
