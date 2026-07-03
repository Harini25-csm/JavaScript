function fun(...n){
    let sum=0;
    for(let a of n){
        sum+=a;
    }
    return sum;
}
console.log(fun(1,2,3));
