let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")


let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")


let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvw_."
let novaSenha = "";
const emailDomainButtons = document.querySelectorAll('input[name="email_domain"]');

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}




for (let button of emailDomainButtons) {
    button.addEventListener('change', function() {
        selectedDomain = this.value;
    });
}

selectedDomain = "@gmail.com"

function generationPassword(){
    let pass = "";
    for (let i = 0 , n = charset.length; i < sliderElement.value;++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
       
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass + selectedDomain;
    novaSenha = pass;
}

function copyPassword(){
   navigator.clipboard.writeText(novaSenha + selectedDomain)
}