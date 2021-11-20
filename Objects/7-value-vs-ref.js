//value type >primitive ,num,str,bool.sym,undef,null
//ref obj,fun,array
let x = 10; //x is 10
let y = x; //y is 10

x=20; //x is 20



let x = { value:10}; //x is 20
let y = x; //y is 20

x.value=20; //x is 20




let number = 10;
function increase(number){
    number++;
}

increase(number); //11
console.log(number); //10


let obj = {value:10};
function increase(number){
    obj.value++;
}

increase(obj); //11
console.log(obj); //11 //passed by ref //points to same obj