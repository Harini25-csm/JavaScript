export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}
export function mul(a,b){
    return a*b;
}
export function fact(n){
    let f=1;
    for(let i=1;i<=n;i++){
        f*=i;
    }
    return f;
};
export let stu={
    name:"abd",
    age:19,
    usn:319
};
export let emp= {
    name:"harini",
    salary:95000,
    age:24
}
export const largest=(...num)=>{
   return Math.max(...num);
};
export const lar=(...num)=>{
    let max=num[0];
    for(const x of num){
        if(max<x){
            max=x;
        }
    }
    return max;
};