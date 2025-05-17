// let array = [23,43,55,67,87];
// let sum = 0;
// for(let i = 0; i < array.length;i++)
// {
//     sum += array[i] 
// }
// let average = sum / array.length;
// console.log("average is",average);

let item = [233,900,300,700,500];
for(let i =0;i<item.length;i++ ){
    let offer =item[i] / 10;
    item[i] -=  offer;
}
console.log("offer value is",item);