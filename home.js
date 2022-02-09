const hamburguesa = document.querySelector('.hamburguesa');
const desplegable = document.querySelector('.container-desplegable');
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


function contador() {
    title.style.display = 'none';
    title2.style.display = 'block';
}

function contador2() {
    title.style.display = 'block';
    title2.style.display = 'none';
}

setInterval('contador()',10000);
setInterval('contador2()',20000);
