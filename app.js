const calculator = {
    calPlus : function(num1, num2) {
        console.log('안녕');
        return num1 + num2;
        console.log('안녕2');
    },
    calMinus : function(num1, num2) {
        console.log("두 수의 차는 " + (num1 - num2) + " 입니다.")
    },
    calDevide : function(num1, num2) {
        console.log(num1 + " 을 " + num2 + " 로 나눈 값은" + (num1/num2) + " 입니다.")
    },
    calMultiply : function(num1, num2) {
        console.log(num1 + " 와 " + num2 + " 의 곱은" + (num1*num2) + " 입니다.")
    },

};

const calcPlus = calculator.calPlus(2, 3);



