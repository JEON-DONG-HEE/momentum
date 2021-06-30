const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("#login_form input");    // querySelector 가 검색되는 첫번째 요소만 선택함으로 submit 은 선택되지 않는다
const loginResult = document.querySelector(".user_name");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    //console.log(userName);
    localStorage.setItem("userName", userName);
    
    loginResult.innerText = `Hello ${userName} 환영합니다`;     
    loginResult.classList.remove(HIDDEN_CLASSNAME);
    
};

loginForm.addEventListener("submit", onLoginSubmit);

const userNameStorage = localStorage.getItem("userName");

//console.log(userNameStorage);

if (userNameStorage === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginResult.classList.add(HIDDEN_CLASSNAME);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginResult.classList.remove(HIDDEN_CLASSNAME);
    loginResult.innerText = `Hello ${userNameStorage} 환영합니다`;        
}

