const clock = document.querySelector(".clock");

function getClock() {
    const nowTime = new Date();

    // padStart() 함수는 String 에 쓸 수 있다 
    // Date() 함수는 number 를 반환함으로 String() 함수로 변환을 해주어야 padStart() 함수를 사용할 수 있다
    const getHour = String(nowTime.getHours()).padStart(2, "0");  
    const getMinute = String(nowTime.getMinutes()).padStart(2, "0");
    const getSecond = String(nowTime.getSeconds()).padStart(2, "0");

    clock.innerText = `${getHour}:${getMinute}:${getSecond}`;
};

getClock(); // 실행시 getClock 이 1초의 interval 이 있기 때문에, interval 이 없도록 최초에 한번 실행해 준다
setInterval(getClock, 1000);



