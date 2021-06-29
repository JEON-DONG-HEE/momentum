const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("#login_form input");
const loginResult = document.querySelector(".uer_name");

const HIDDEN_CLASSNAME = "dp_none"; // 노마드코더는 단순히 string 값을 저장할 때는 대문자로 이렇게 네이밍하는 것이 관습이라고 한다

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    //loginResult.innerText = "Hello " + userName;  // 일반적으로 이렇게 쓰지만
    loginResult.innerText = `Hello ${userName} 환영합니다`;    // 이렇게 써도 됨(+ 로 연결 안해줘도 됨) 여기서 $는 제이쿼리 아님, 주의해야 할건 ``(백틱) 기호로 넣어야 한다는 것이다
    loginResult.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);





