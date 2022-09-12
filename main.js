number1 = document.querySelector(".num1");
number2 = document.querySelector(".num2");
mnoz = document.querySelector(".mnoz");
dziel = document.querySelector(".dziel");
dod = document.querySelector(".dod");
ode = document.querySelector(".odej");
sec = document.querySelector("section");

mnoz.addEventListener('click', function(evt) {
    evt.preventDefault();
    sec.innerHTML = (parseInt(number1.value) * parseInt(number2.value));
});

dziel.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(parseInt(number2.value) != 0){
        sec.innerHTML = (parseInt(number1.value) / parseInt(number2.value));
    }else{
        sec.innerHTML = ("Nie dziel przez zero");
    }
    
});

dod.addEventListener('click', function(evt) {
    evt.preventDefault();
    sec.innerHTML = (parseInt(number1.value) + parseInt(number2.value));
});

ode.addEventListener('click', function(evt) {
    evt.preventDefault();
    sec.innerHTML = (parseInt(number1.value) - parseInt(number2.value));
});

