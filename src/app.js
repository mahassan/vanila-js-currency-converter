

const app = document.getElementById("app");
const form = document.querySelector(".exchange-board");
const currencyInput = document.getElementById("gbp");
const amount = document.getElementById("amount")
const submit = document.querySelector('.submit')

let AUD;
let GBP;
function callApi(){
    if(gbp.value !== ''){
        app.classList.add("loading")
        fetch("https://api.exchangerate-api.com/v4/latest/GBP")
         .then((res)=>{
             return res.json()
         })
         .then(({rates})=>{
            AUD = rates.AUD
            app.classList.remove("loading")
            amount.value = currencyInput.value * AUD;
         })
    }
    
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    callApi()
})


