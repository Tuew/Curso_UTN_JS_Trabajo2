var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
];



function obtenerMayorConFilter(){
     
    var aprobado = alumnos.filter(n => n.nota >= 7);
    
    for(var i = 0; i < aprobado.length; i++){
        if(aprobado[i].nota >= 7){
            console.log(`Los aprobados son: ${aprobado[i].nombre} con ${aprobado[i].nota}`)
        }
    }

}

obtenerMayorConFilter();








 