function sayHello(catsName, age) {
    console.log("Hello My Name is " + catsName + "and i " + age + " years old");
}

sayHello("DD", 1);
sayHello("TT", 2);
sayHello("LULU", 3);


function plus(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

function devide(firstNum, secondNum) {
    console.log(firstNum / secondNum);
}

plus(10, 5);
devide(10, 3)

const player = {
    name: "Donghee",
    sayHello: function(userName, age) {
        console.log("Hello my name is " + userName + " and i am " + age);
    },
};


player.sayHello("Donghee", 20);
player.sayHello("LULU", 2);




