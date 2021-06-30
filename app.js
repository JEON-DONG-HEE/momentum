const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("#login_form input");    // querySelector 가 검색되는 첫번째 요소만 선택함으로 submit 은 선택되지 않는다
const loginResult = document.querySelector(".user_name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"; // string 을 직접 넣다가 오류가 나면, 스크립트는 오류메시지를 보내지 않지만,
                                 // 이런식으로 상수에 담아서 사용하면 상수명에 오타가 날 결우 
                                 // not defined 오류 메시지를 보내줘서 어디서 문제가 생겼는지 알 수 있다

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    messageWelcome(userName);   // 여기서는 loginInput 에 있는 value 값 넣어서 반환
    
};

function messageWelcome(userName) {
    loginResult.innerText = `Hello ${userName} 환영합니다`;     
    loginResult.classList.remove(HIDDEN_CLASSNAME);
}

const userNameStorage = localStorage.getItem(USERNAME_KEY);

if (userNameStorage === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    messageWelcome(userNameStorage);    // 여기서는 localStorage 에 있는 value 넣어서 반환
}

