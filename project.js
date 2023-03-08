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


*/


const age = parseInt(prompt("How old are you"));

if(isNaN(age) == false && age > 19)
{
    console.log("u can buy");
}
else
{
    console.log("f u");
}