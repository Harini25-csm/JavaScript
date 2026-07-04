function hello(name,callback) {
    console.log("Hello!!"+name);
    callback();
}
function argfun() {
    console.log("bye");
}
hello("jerry",argfun);