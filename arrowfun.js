const add=(a,b)=>a+b;
console.log(add(5,13));

const nums=[1,2,3,4];
const [a,b]=nums;
console.log(a,b);


function fun(...num){
    console.log(num);
}
fun(1,2,3,4,5,6);