const loginForm = document.querySelector("#loginForm");
const idInput = document.querySelector("#idInput");
const pwInput = document.querySelector("#pwInput");

function submitEvent(event) {
  event.preventDefault();
}

if (localStorage.getItem("userId") === null) {
  console.log("아이디가 없습니다!");
}

loginForm.addEventListener("sumbmit", submitEvent);
