const hamburguesa = document.querySelector('.hamburguesa');
const desplegable = document.querySelector('.container-desplegable');
const header = document.querySelector('.header');
let title = document.querySelector('.container__menu-title');
let title2 = document.querySelector('.container__menu-title2');
let countDesplegable = 0;

hamburguesa.addEventListener('click', function() {
    if(countDesplegable == 0) {
        desplegable.style.display = 'flex';
        countDesplegable = 1;
    }else if(countDesplegable == 1) {
        desplegable.style.display = 'none';
        countDesplegable = 0;
    }
});

