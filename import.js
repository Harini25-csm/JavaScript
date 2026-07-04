import { add,sub,mul,fact,stu } from "./export.js";
console.log(add(4,2));
console.log(sub(4,2));
console.log(mul(4,2));
console.log(fact(4));
for(let key in stu){
    console.log(key,":",stu[key]);
}
