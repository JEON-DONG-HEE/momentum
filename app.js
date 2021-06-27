const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age)); 

if (isNaN(age) || age < 1) {
    console.log("Write a real number")
} else if (age < 18) {
    console.log("You are too young");
} else if (age >=18 && age <=50){
    console.log("You can Drink");
} else if (age >= 50 && age <=80) {
    console.log("You can exercise");
} else if (age > 80) {
    console.log("You can do anything");
}