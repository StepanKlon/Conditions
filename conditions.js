
let myFirstFunction = (number) => {

    for (let i = 1; i <= number; i++) {
        console.log(i);    
    }
};
console.log(myFirstFunction(5));

let greeting = (name) => {
    return "Hello " + name + "!";
}

console.log(greeting("Honza"));

let printValues = [1,5,3,5];

printValues.forEach(number => {
    console.log(number)
});

