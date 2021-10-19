function getPrice(weight, type_weight) 
{
    let cost = document.getElementById("cost");
    if (weight != 0) {
        cost.innerHTML = type_weight * weight + " рублей";
    } else {
        cost.innerHTML = "Введите корректные данные";
    }
}
function getPriceOptions(weight, type_weight, option) {
    let cost = document.getElementById("cost");
    if (weight == 0) {
        cost.innerHTML = "Введите корректные данные";
    } else {
        switch (option) {
            case "1":
                cost.innerHTML = ((type_weight + 800) * weight) + " рублей";
                break;
            case "2":
                cost.innerHTML = ((type_weight + 850) * weight) + " рублей";
                break;
            case "3":
                cost.innerHTML = ((type_weight + 1000) * weight) + " рублей";
                break;
        }
    }
}
window.addEventListener('DOMContentLoaded', function(event){
    console.log("DOM fully loaded and parsed");
    let radioListener = "";
    let weight = 0;
    let type_weightAll = [250, 0, 658];
    let type_weight = type_weightAll[0];
    let f1 = true, f2=true, f3=true;
    let cost = document.getElementById("cost");
    cost.innerHTML = "Введите данные";
    let re = /^\d+$/;
    let weightHTML = document.getElementById("weight");
    weightHTML.addEventListener("change", function(event) 
    {
        if (re.test(event.target.value)) 
        {
            weight = parseInt(event.target.value);
            if(f1 && f2) 
            {
                getPrice(weight, type_weight);
            } 
            else if(!f1) 
            {
                getPriceOptions(weight, type_weight, radioListener);
                f1 = true;
            } 
            else if(!f2 && !f3)
            {
                cost.innerHTML = (type_weight + 100) * weight;
                f2 = true;
                f3 = true;
            } 
            else if(f3)
            {
                getPrice(weight, type_weight);
            }

            let a = document.getElementsByName("type_weight");
            a[0].addEventListener("change", function(event) 
            {
                let select = event.target;
                let radios = document.getElementById("options");
                let checkbox = document.getElementById("property");
                if (select.value == "gram") 
            {
                radios.style.display = "none";
                checkbox.style.display = "none";
                type_weight = type_weightAll[0];
                getPrice(weight, type_weight);
            } 
            else if (select.value == "t") 
            {
                radios.style.display = "none";
                checkbox.style.display = "block";
                type_weight = type_weightAll[2];
                getPrice(weight, type_weight);
            } 
            else 
            {
                radios.style.display = "block";
                checkbox.style.display = "none";
                type_weight = type_weightAll[1];
                getPrice(weight, type_weight);
            }
            a[0].blur();
            });

            let radioHTML = document.querySelectorAll(".options input[type_weight=radio]");
            radioHTML.forEach(function(radio) 
            {
                radio.addEventListener("change", function(event) 
                {
                    radioListener = event.target.value;
                    getPriceOptions(weight, type_weight, radioListener);
                    f1 = false;
                });
            });

            let b = document.getElementsByName("property");
            b[0].addEventListener("change", function(event)   
            {
                if (event.target.checked && weight != 0) 
                {
                    cost.innerHTML = (type_weight + 350) * weight + " рублей";
                    f2 = false;
                    f3 = false;
                } 
                else 
                {
                    getPrice(weight, type_weight);
                    f3 = true;
                }
            });

        } 
    else 
    {
        weight = 0;
        cost.innerHTML = "Введите корректные данные";
    }
    weightHTML.blur();
    });

});
