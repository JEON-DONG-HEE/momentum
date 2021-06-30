const clock = document.querySelector(".clock");

function getClock() {
    const nowTime = new Date();
    const getHour = nowTime.getHours();
    const getMinute = nowTime.getMinutes();
    const getSecond = nowTime.getSeconds();

    clock.innerText = `${getHour}:${getMinute}:${getSecond}`;
};

getClock();
setInterval(getClock, 1000);

// 시계 기능이 구현되었으나 1초가 01초로 나오지 않는 문제점이 있다