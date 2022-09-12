number1 = document.querySelector(".num1");
number2 = document.querySelector(".num2");

times = document.querySelector(".mnoz");
divide = document.querySelector(".dziel");
add = document.querySelector(".dod");
subtract = document.querySelector(".odej");

result = document.querySelector("section");

// mnożenie
times.addEventListener('click', function(evt) {
    evt.preventDefault();
    result.innerHTML = (parseInt(number1.value) * parseInt(number2.value));
});

// dzielenie
divide.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(parseInt(number2.value) != 0){
        result.innerHTML = (parseInt(number1.value) / parseInt(number2.value));
    }else{
        result.innerHTML = ("Nie dziel przez zero");
    }
});

// dodawanie
add.addEventListener('click', function(evt) {
    evt.preventDefault();
    result.innerHTML = (parseInt(number1.value) + parseInt(number2.value));
});

// odejmowanie
subtract.addEventListener('click', function(evt) {
    evt.preventDefault();
    result.innerHTML = (parseInt(number1.value) - parseInt(number2.value));
});

