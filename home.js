
let carousel = document.querySelector('.carousel');

const milesimas = 2000;
let contador = 0;

const imagenes = [
    'assets/toboro.jpg',
    'assets/boulevarMonseñor.jpg',
    'assets/anitaSuarez.jpg'
];

function pasarFoto() {
    for(var i = 0; i <= imagenes.length-1; i++){
        carousel.style.backgroundImage = `url(${imagenes[i]})`
    }
}


window.onload = function() {
    pasarFoto();
  };

