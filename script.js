const area4 = document.querySelector(".area4");
const area5 = document.querySelector(".area5");
const area6 = document.querySelector(".area6");
const btn1 = document.querySelector("#button4");
const btn2 = document.querySelector("#button5");
const btn3 = document.querySelector("#button6");

function showAdd () {
    area4.classList.toggle("show");
}
function showAdd1 () {
    area5.classList.toggle("show");
}
function showAdd2 () {
    area6.classList.toggle("show");
}

btn1.addEventListener("click",showAdd)
btn2.addEventListener("click",showAdd1)
btn3.addEventListener("click",showAdd2)

console.log(area6)