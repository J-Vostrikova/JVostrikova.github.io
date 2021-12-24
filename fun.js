
var btn = document.querySelector('#btn');
var out = document.querySelector('#out');
var зфн = document.querySelector('#cena');
var kol = document.querySelector('#kol');
var c=cena.value;
var k=kol.value;

window.addEventListener('DOMContentLoaded', function (event) {
console.log("DOM fully loaded and parsed");
btn.onclick = function()
 { const k = /-+?|\b0[0-9]+/;
  const k2 = /^$/;
  var pro = parseInt(cena.value) *parseInt(kol.value);
    if((k.test(cena.value) ||k.test(kol.value))===true ) {
      alert("Введите корректные данные")

}

else if((k2.test(cena.value) ||k2.test(kol.value))===true ) {
  alert("Введите корректные данные")

}
    else {out.innerHTML = pro;ob();} }
 });
