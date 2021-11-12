let reg = /[A-Za-zА-Яа-я]/;
let quantity = document.querySelector('#quantity');
quantity.oninput = function(){
	this.value = this.value.replace(reg, '');    
}
function getPrice(quantity, type) 
{
	let cost = document.getElementById("cost");
	if (quantity != 0) {
		cost.innerHTML = type * quantity + " рублей";
	} else {
		cost.innerHTML = "введите корректные данные";
	}
}

function getPriceOptions(quantity, type, option) {
	let cost = document.getElementById("cost");
	if (quantity == 0) {
		cost.innerHTML = "введите корректные данные";
	} else {
		switch (option) {
			case "1":
				cost.innerHTML = ((type + 582) * quantity) + " рублей";
				break;
			case "2":
				cost.innerHTML = ((type + 468) * quantity) + " рублей";
				break;
			case "3":
				cost.innerHTML = ((type + 402) * quantity) + " рублей";
				break;
		}
	}
}

window.addEventListener('DOMContentLoaded', function(event) {
	console.log("DOM fully loaded and parsed");
  	let radioListener = "";
	let quantity = 0;
	let typeAll = [1895, 0, 1687];
	let type = typeAll[0];
  	let f1 = true, f2=true, f3=true;
	let cost = document.getElementById("cost");
	cost.innerHTML = "введите данные";

	let re = /^\d+$/;

	let quantityHTML = document.getElementById("quantity");
	quantityHTML.addEventListener("change", function(event) 
  	{
		if (re.test(event.target.value)) 
    	{
      		quantity = parseInt(event.target.value);
            if(f1 && f2) 
			{
		        getPrice(quantity, type);
            } 
			else if(!f1) 
			{
              	getPriceOptions(quantity, type, radioListener);
              	f1 = true;
            } 
            else if(!f2 && !f3)
            {
                cost.innerHTML = (type + 245) * quantity;
                f2 = true;
		        f3 = true;
            } 
            else if(f3)
            {
		        getPrice(quantity, type);
		    }

            let k = document.getElementsByName("type");
	        k[0].addEventListener("change", function(event) 
          	{
		        let select = event.target;
		        let radios = document.getElementById("options");
		        let checkbox = document.getElementById("property");
		      	if (select.value == "cookies") 
          	{
			    radios.style.display = "none";
			    checkbox.style.display = "none";
			    type = typeAll[0];
			    getPrice(quantity, type);
		    } 
          	else if (select.value == "candies") 
          	{
			    radios.style.display = "none";
			    checkbox.style.display = "block";
			    type = typeAll[2];
			    getPrice(quantity, type);
		    } 
          	else 
          	{
			    radios.style.display = "block";
				checkbox.style.display = "none";
			    type = typeAll[1];
			    getPrice(quantity, type);
		    }
		    k[0].blur();
          	});

          	let radioHTML = document.querySelectorAll(".options input[type=radio]");
	        radioHTML.forEach(function(radio) 
          	{
		        radio.addEventListener("change", function(event) 
            	{
			    	radioListener = event.target.value;
			    	getPriceOptions(quantity, type, radioListener);
              		f1 = false;
		    	});
	        });

          	let o = document.getElementsByName("property");
	        o[0].addEventListener("change", function(event)   
          	{
		        if (event.target.checked && quantity != 0) 
            	{
			        cost.innerHTML = (type + 518) * quantity + " рублей";
              		f2 = false;
					f3 = false;
		        } 
            	else 
            	{
			        getPrice(quantity, type);
					f3 = true;
		        }
	        });

		} 
    else 
    {
		quantity = 0;
		cost.innerHTML = "введите корректные данные";
	}
	quantityHTML.blur();
	});

});
