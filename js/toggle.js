document.addEventListener("DOMContentLoaded", toggleBtn);

function toggleBtn(){
    "use strict";
    /* Declaración de variables */
    let btn_monthly = document.getElementById("monthly");
    let btn_annualy = document.getElementById('annualy');
    let basicPrice = document.getElementById('basicPrice');
    let premiumPrice = document.getElementById('premiumPrice');
    let businessPrice = document.getElementById('businessPrice');
    let basicValue = 39;
    let premiumValue = 49;
    let businessValue = 59;

    /* Función que añade los precios de los planes mensuales (POR DEFECTO) */
    function addDefaultValues(){
        basicPrice.innerHTML = "$" + basicValue + "<span> / Monthly</span>";
        premiumPrice.innerHTML = "$" + premiumValue + "<span> / Monthly</span>";
        businessPrice.innerHTML = "$" + businessValue + "<span> / Monthly</span>";
    }
    
    
    /* Función que cambia precios mensuales a precios anuales */
    function changeValues(){
        if (!btn_annualy.classList.contains("disabled")){  //Si el boton no contiene la clase "disabled"
            basicPrice.innerHTML = "$" + (basicValue*12) + "<span> / Annualy</span>";
            premiumPrice.innerHTML = "$" + (premiumValue*12) + "<span> / Annualy</span>";
            businessPrice.innerHTML = "$" + (businessValue*12) + "<span> / Annualy</span>";
        }else{
            addDefaultValues(); // Caso contrario, añade los valores por defecto
        }
    }

    /* Eventos */
    btn_annualy.addEventListener("click", function (){
        btn_annualy.classList.remove("disabled");
        btn_monthly.classList.add("disabled");  
        
        changeValues();
    });

    btn_monthly.addEventListener("click", function (){
        btn_monthly.classList.remove("disabled");
        btn_annualy.classList.add("disabled");

        changeValues();
    });

    addDefaultValues();

}