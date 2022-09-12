number1 = document.querySelector(".num1");
number2 = document.querySelector(".num2");
times = document.querySelector(".mnoz");
divide = document.querySelector(".dziel");
add = document.querySelector(".dod");
subtract = document.querySelector(".odej");
wynik = document.querySelector("section");

times.addEventListener('click', function(evt) {
    evt.preventDefault();
    wynik.innerHTML = (parseInt(number1.value) * parseInt(number2.value));
});

divide.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(parseInt(number2.value) != 0){
        wynik.innerHTML = (parseInt(number1.value) / parseInt(number2.value));
    }else{
        wynik.innerHTML = ("Nie dziel przez zero");
    }
    
});

add.addEventListener('click', function(evt) {
    evt.preventDefault();
    wynik.innerHTML = (parseInt(number1.value) + parseInt(number2.value));
});

subtract.addEventListener('click', function(evt) {
    evt.preventDefault();
    wynik.innerHTML = (parseInt(number1.value) - parseInt(number2.value));
});

