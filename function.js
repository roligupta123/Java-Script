//function

// function printGreeting(){
//     console.log("Good Morning J.S");
// }

// printGreeting();

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log("sum of three number is",sum(2,6,2));

// //Arrow Function
// const multimply = (x,y)=>{ return x*y;}

//console.log("multiply of two number",5*3);

//CallBack function
// let arr=["Anuj","Anchal","Zainab","Sahil","Priti"];
// arr.forEach((val) => {
//     console.log(val());
// });

function countVowel(){
    let name = prompt("enter any name:");
    console.log(name);
    let count = 0;
    for(let value of name)
    {
        if(value === "a"||value==="e"||value==="i"||value==="o"||value==="u"){
            count++;
            
        }
    }
    console.log("vowel number is",count);
}
countVowel();



