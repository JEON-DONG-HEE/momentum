const loginForm = document.getElementById("login_form"); // js가 아이디임을 인지하므로 #은 안 넣는다
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

// 이런식의 validation 을 스크립트로 연습하는 것은 좋은 연습이다.
// 하지만 항상 사용할 수 있는 최고의 방법을 사용하는 것이 좋으며
// 이 케이스에서 그것은 HTML 의 validation 관련 속성을 사용하는 것이다.
/*
function clickLoginBtn() {
    const userName = loginInput.value;
    if (userName === "") {
        console.log("이름을 입력하세요");
    } else if (userName.length > 15) {
        alert("입력 가능한 글자수를 초과했습니다");
    }
};
*/

loginBtn.addEventListener("click", clickLoginBtn);