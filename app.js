const titH1 = document.querySelector('div:nth-child(1) h1');


// function_01 이렇게 하면 기존의 클래스를 잃어버리는 현상이 나타남
/*
function handleChangeColor() {
    const chkClicked = "sexy_font on";  // 휴먼에러의 가능성을 줄이기 위해 이렇게 상수에 담음(2개 이상일 경우 이렇게 하는게 좋음)
    if (titH1.className === chkClicked) {
        titH1.className = "";
    } else {
        titH1.className = chkClicked;
    }
};
*/

// function_02 그래서 이렇게 토글 기능을 구현할 수 있음, 하지만 이것도 길다
/*
function handleChangeColor() {
    const chkClicked = "on";
    if (titH1.classList.contains(chkClicked)) {
        titH1.classList.remove(chkClicked);
    } else {
        titH1.classList.add(chkClicked);
    }
};
*/
// function_03 이렇게 하면 된다. 제이쿼리 필요없네
function handleChangeColor() {
    titH1.classList.toggle("on"); // 하나만 들어가기 때문에 굳이 휴먼에러를 피하기 위해 상수에 담을 필요는 없음
};


titH1.addEventListener("click", handleChangeColor);


