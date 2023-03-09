/*
setInterval(함수, 밀리세컨) == 반복동작
setInterval(함수, 밀리세컨) == 밀리세컨 후 동작
*/

const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    // if (date.getSeconds() <= 9)
    // {
    //     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`);
    // }
    // else
    // {
    //     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // }

    // "1".padStart(2, "0");
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);
