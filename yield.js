function* num(){
    yield 10;
    yield 20;
    yield 30;

}
const gen=num();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());