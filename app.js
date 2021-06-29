const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("#login_form input[type='submit']");

function onLoginSubmit(e) {
    e.preventDefault(); // 브라우저의 기본 동작을 막아줌, 이 소스에서는 submit 의 기본 동작(페이지 새로고침, 서버와의 동기화)을 막아줌
    const userName = loginInput.value;
    console.log(e);
};

//form 은 이벤트리스너를 버튼이나 submit 버튼에 걸어주는게 아니라 form 자체에 걸어줘야 한다 End point trigger?
loginForm.addEventListener("submit", onLoginSubmit);  


