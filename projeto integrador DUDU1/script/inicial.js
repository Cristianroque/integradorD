const btnEsquerdaData = document.querySelector("#btnEsquerdaData");
const btnDireitaData = document.querySelector("#btnDireitaData");
const data = document.querySelector("#data");

const calender = document.querySelector("#calender");
const notas = document.querySelector("#notas");
const faltas = document.querySelector("#faltas");
const notificacao = document.querySelector("#notificacao");

/*----------------MUDANÇA DE BOTÕES MENU-------------------*/

calender.addEventListener("click", () => {
    window.location.href = "./inicial.html"
})
notas.addEventListener("click", () => {
    window.location.href = "./notas.html"
})
faltas.addEventListener("click", () => {
    window.location.href = "./faltas.html"
})
notificacao.addEventListener("click", () => {
    window.location.href = "./notificacao.html"
})

/*----------------MUDANÇA DE BOTÕES MENU-------------------*/

let dataNumber = parseInt((data.textContent).slice(0,2))

btnDireitaData.addEventListener("click", () => {
    if(dataNumber <= 25){
        data.textContent = `${dataNumber += 1}/11/2024`
    }
})

btnEsquerdaData.addEventListener("click", () => {
    if(dataNumber >= 12){
        data.textContent = `${dataNumber -= 1}/11/2024`
    }
})