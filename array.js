// const fruits = ["apple",'mango',"banana"];
// //console.log(fruits);
// console.log(fruits.push("lichi","payaya"));     //last add
// //console.log(fruits.pop());        //last remove
// //console.log(fruits.delete(apple));
// //console.log(fruits.length());
// //console.log(fruits.shift())   //first remove
// console.log(fruits.unshift("kivi"))     //first add
// //const color = ["red","pink","blue","black"]
// //console.log(fruits.concat(color));                          //add two array
// console.log(fruits.sort());             //shorting
// //console.log(fruits.reverse());        //reverse
// //console.log(fruits.copyWithin(2,0,2));  //copy same array
// //console.log(fruits.flat());
// //console.log(fruits.splice(2,2,"pineapple","orange"));        //delete of middle and add that place
// //console.log(fruits.toString());     //convert in String

// //console.log(fruits.slice(1,2));       //cut
// //console.log(fruits.indexOf("mango"));     //gives index value
// //console.log(fruits.includes("guava"));

// console.log(fruits);


// let number = [234,545,655,654,445,655];

// let index=0;
// for(let value of number){
//     console.log(`value of index ${index}= ${value}`);
//     let offer = value / 10;
//     number[index]=number[index]-offer;
//     console.log(`value after offer ${number[index]}`)
//     index++;
// }

//callback for each

// let arr = ["Anuj","Monu","Roli"];
// arr.forEach((val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// });

// let arr = [1,2,3,4,5,6];
// arr.forEach((val)=>{
//     console.log(val,"square =",val*val);
// });

//map in array
// let Array = [1,2,3,4,5];
// let double = Array.map((val)=>{
//     return val*2;
// });
// console.log(double);

// let num = [1,2,3,4,5];
// let output = num.reduce((cur,res)=>{
//     return cur + res;
// });
// console.log(output);

// let num = [1,2,21,4,5];
// let output = num.reduce((cur,res)=>{
//     return cur > res ? cur:res;
// });
// console.log(output);

// let Array = [89,99,78,96,94,100,123,333,213];
// let filter=Array.filter((val)=>{
//     return 90 < val;
// });
// console.log(filter);
// console.log(Array);

let n = prompt("enter a number:");
console.log(n);

let array = [];
for(let i = 1;i <= n;i++){
    array[i-1]= i;
}

console.log(array);
let output = array.reduce((prev,res)=>{
    return prev + res;
});
console.log("sum=",output);

let factorial = array.reduce((prev,res)=> prev * res);
console.log("factorial=",factorial);














