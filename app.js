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
} else if (age === 100) { // 2. 그래서 원하는 결과를 위해 이렇게 순서를 바꿔야 할 때도 있음
    console.log("You are wise");    
} else if (age > 80) {
    console.log("You can do anything");
} else if (age === 100) {   // 1. 바로 윗줄에서 true 가 나오기 때문에 아랫줄을 실행이 되지 않음
    console.log("You are wise");    
}
