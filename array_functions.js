
let array = [1,2,3,4,5]

// array.forEach(function(val) {
//         console.log(val+1);
        
// });
// console.log(array);


// let fruits = ['banana','grapes','orange']
// fruits.forEach(function(val){
//     console.log(val);
// })


// let fru = array.map(function(val){
//     return val + 10
// })
// console.log(fru);

let f = array.filter(function(val){
    if (val === 2) {
        return val
    }
})
console.log(f);
// console.log(array);

let find = array.find(function(val){
    if (val === 2) {
        return val
    }
})
console.log(find);
console.log(array.indexOf(4));



// object or methods
let object = {
    name : "Anuj",
    age:15
}
console.log(object['name']);
console.log(object.age);

object.name = 'Roli'
console.log(object.name)
object.age = 18
console.log(object.age);


// Object.freeze(obj)

// object.name = 'Roli'
// console.log(object.name)


//function

function getName(name,age,add){
    console.log(name,age);
    
}
getName('anuj',16)
console.log(getName.length);










