let reg = /[A-Za-zА-Яа-я]/;
let weight = document.querySelector('#weight');
let pay = document.querySelector('#pay');
weight.oninput = function(){
    this.value = this.value.replace(reg, '');    
}
pay.oninput = function(){
    this.value = this.value.replace(reg, '');    
}
function calc() {
    let reg = /^\d+$/;
    let cost = document.getElementById('cost');
    let weight = document.getElementById('weight');
    let pay = document.getElementById('pay');
    if(reg.test(pay.value) && reg.test(weight.value)){
        cost.innerHTML = "Стоимость заказа: " + parseFloat(weight.value) * parseFloat(pay.value) + ".00 руб.";
    } else{
        alert(cost.innerHTML = "Введите корректные данные");
    }
    return false;
  }
window.addEventListener('DOMContentLoaded', function (_event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("my-button").addEventListener("click", calc);
  });
