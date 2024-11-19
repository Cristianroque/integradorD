const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const divFlutuante = document.querySelector("#divFlutuante");
const X = document.querySelector("#X");
const hrefBTN = document.querySelector("#hrefBTN")

function acessar(){
    if(user.value == "user" && pass.value == "1234"){
        hrefBTN.href = "./inicial.html";
    }else{
        divFlutuante.style.top = "1%";
    }
}
X.addEventListener("click", () => {
    divFlutuante.style.top = "-30%";
})

