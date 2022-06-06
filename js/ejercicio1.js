
var fondo1 = document.querySelector('.cuadrado1');
var fondo2 = document.querySelector('.cuadrado2');
var fondo3 = document.querySelector('.cuadrado3');



fondo1.addEventListener('click', e =>{
    document.body.style.background = "blue";
});

fondo2.addEventListener('click', e =>{
    document.body.style.background = "red";
});

fondo3.addEventListener('click', e =>{
    document.body.style.background = "violet";
});

