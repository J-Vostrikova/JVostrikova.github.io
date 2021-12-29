

var b = document.querySelector('#but');
var out = document.querySelector('#out');
var pay = document.querySelector('#cena');
var weight = document.querySelector('#kol');
var p=pay.value;
var w=weight.value;

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  b.onclick = function(){ 
    const c1 = /\W/;     /*любая цифра, буква или знак подчеркивания*/
    const c2 = /[^0-9]/; /*любая не цифра*/
    const c3 = /^$/;     /*начало и конец(пустота)*/
    var pro = parseInt(pay.value) *parseInt(weight.value);
      if((c1.test(pay.value) ||c1.test(weight.value))===true || 
         (c2.test(pay.value) ||c2.test(weight.value))===true ||
         (c3.test(pay.value) ||c3.test(weight.value))===true) {
        alert("Ошибка: введите корректные данные")
      }
      else {
        out.innerHTML = pro;
        
      } 
  }
});
