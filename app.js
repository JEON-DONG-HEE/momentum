const hellos = document.querySelector('div:nth-child(1) .hello');
const hellos2 = document.querySelector('div:nth-child(2) .hello');

console.log(hellos);

hellos.addEventListener("click", changeColor);
hellos.addEventListener("mouseover", chkMouseOver);
hellos.onmouseleave = chkMouseLeave;    // 이렇게 사용해도 되지만 나중에 이벤트 리스너를 제거하는 경우도 있으므로 이런식의 방법은 좋은 방법은 아니다

hellos2.addEventListener("focus", chkFocus);
hellos2.addEventListener("blur", chkBlur);


window.addEventListener("resize", resizeDoc);
window.addEventListener("copy", chkDrag);
window.addEventListener("beforeprint", chkPrint);



function changeColor() {
    hellos.style.color = "red";
}

function chkMouseOver() {
    hellos.innerText = "Mouse in";
}

function chkMouseLeave() {
    hellos.innerText = "Mouse out";
}

function chkFocus() {
    hellos2.value = "포커스 되었습니다";
}

function chkBlur() {
    hellos2.value = "";
}

function resizeDoc() {
    document.body.style.background = "lightgreen";
}

function chkDrag() {
    alert('복사했습니다');
}

function chkPrint() {
    alert('문서 출력 중입니다 ^^');
}



//console.dir(hellos);  // 이런식으로 객체가 가지고 있는 property 를 검색하고 코드에 사용할 수 있다


