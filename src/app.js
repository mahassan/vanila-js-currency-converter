

const app = document.querySelector("#app");
const form = document.querySelector(".exchange-board");
const currencyInput = document.querySelector("#gbp");
const amount = document.querySelector("#amount")
const submit = document.querySelector('.submit')

let AUD;
let GBP;
function callAPI(){
    fetch("https://api.exchangerate-api.com/v4/latest/GBP")
     .then((res)=>{
         return res.json()
     })
     .then(({rates})=>{
        AUD = rates.AUD
        amount.value = currencyInput.value * AUD;
     })
     .catch(err => {
         amount.appendChild("div").innerText("Error occurred" ,err)
     })
}
form.addEventListener("submit", function(e){
    e.preventDefault();
})


