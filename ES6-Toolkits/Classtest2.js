function sum(x,y,z,...f) {
    return x+y+z;
}
const num = [1,2,3,4,5];

console.log(sum(...num)); //spread

let a = ` aaa
aaa
aa`


// let arr = [1,2,3];
// // function sum (a,b){
// //     return a+b;
// // }

// const sum = arr.reduce(function(sum,arr){
//     const sum1 = sum + arr;
//     return sum1
// },0)

// console.log(sum);

// var a = [{
   
//     age:20
// },
// {
   
//     age:21
// },
// {
    
//     age:22
// }

// ];

// let val = a.reduce((a,b) => ({age: age.a +age: age.b}));

//console.log(val);

let arra = [
    {age : 10},{age:1},{age:1}
];

let val = arra.reduce((a,b)=>({age:a.age+b.age}));
console.log(val);


