/* 
const == 상수
let == 변수
var 도 있지만 이제 안씀. 업데이트 하지 않아야 할 값을 보호받지 못함.

boolean == true , false
const 상수명 == true, false;
const im = null;

undefined == 변수 지정 안해준것;

array == const arr = [원하는 모든것];


const arr = ["my", "name", "is"];
console.log(arr[0]);

const player = {
    name : "hyyoo",
    points : 10,
    fat : "little",
    face : "good",
}

console.log(player);
console.log(player.name);

JS 에서 document.~ 은 HTML의 항목을 가져온다.

const h1 = document.querySelector(".hello h1");
const h1 = document.querySelector("#hello"); == id

const h1 = document.getElementById("hello");

click event

변수명.addEventListener("click", 함수);

h1.classList.toggle("asdfsdaf"); == classList 에 변수명 있는지 확인해서 지우고 더하고 해줌

*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")
// const loginInput = loginForm.input;
const NAME = "name";
const HIDDEN = "hidden";

function subevent(info){
    // const value = loginInput.value;
    info.preventDefault();
    loginForm.classList.add(HIDDEN)
    const name = loginInput.value;

    localStorage.setItem(NAME, name);
    

    paintGreetings(name);
}

loginForm.addEventListener("submit", subevent);

const savename = localStorage.getItem(NAME);

function paintGreetings(NAME){
    greeting.innerText = `Hello ${NAME}`
    greeting.classList.remove(HIDDEN);
}

if (savename === null)
{
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", subevent);
}
else
{
    paintGreetings(savename)
}

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     paintGreetings(username);
//   }
  
//   function paintGreetings(username) {
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//   }
  
//   const savedUsername = localStorage.getItem(USERNAME_KEY);
  
//   if (savedUsername === null) {
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
//   } else {
//     paintGreetings(savedUsername);
//   }