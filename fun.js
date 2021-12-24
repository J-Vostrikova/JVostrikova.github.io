
var btn = document.querySelector('#btn');
var out = document.querySelector('#out');
var cena = document.querySelector('#cena');
var kol = document.querySelector('#kol');
var c=cena.value;
var k=kol.value;

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
btn.onclick = function()
 { const r = /-+?|\b0[0-9]+/;
  const r1 = /\D+/;
  const r2 = /^$/;
  var pro = parseInt(cena.value) *parseInt(kol.value);
    if((r.test(cena.value) ||r.test(kol.value))===true ) {
      alert("Введите корректные данные")

}
 else if((r1.test(cena.value) ||r1.test(kol.value))===true ) {
  alert("Введите корректные данные")

}
else if((r2.test(cena.value) ||r2.test(kol.value))===true ) {
  alert("Введите корректные данные")

}
    else {out.innerHTML = pro;ob();} }
 });
