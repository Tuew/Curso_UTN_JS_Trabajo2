const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');


document.addEventListener('input', e =>{
    
    const target = e.target

    const carcterMax = target.getAttribute('maxlength'); 
    const caracterActual = target.value.length;

    contador.innerHTML = `${caracterActual}/${carcterMax}`;
    
})