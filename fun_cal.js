
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
        let cost;
        let weight = document.getElementById('weight').value;
        let pay = document.getElementById('pay').value;
        if (pay == '' || weight == ''){
            alert("Вы ввели не все данные");
        } else if (pay <= 0 || weight <= 0){
            alert("Введите корректные данные");
        } else{
            cost = weight * pay;
            document.getElementById('cost').innerHTML = "Стоимость товара "+ cost +".00 руб.";
        }
    }