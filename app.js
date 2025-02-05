// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//Aquí deberás desarrollar la lógica para resolver el problema.
let nombreCaja = [];
let cantidadNombres = 0;

function asignarNombres (elemento,texto){
    let asigna = document.querySelector(elemento);
    asigna.innerHTML = texto;
    return;
}

function insertoAmigo (){
if (document.getElementById("nombre").value === ""){
    alert("no has escrito algún nombre");
}else{
    nombreCaja.push(document.getElementById("nombre").value);    
    
    asignarNombres("h2",`la lista es la siguiente: `); 
    asignarNombres("h3",nombreCaja);
    document.getElementById("lista").stylecolor="red";
    
    document.getElementById("nombre").value="";
    console.log(nombreCaja);
}
    let cantidadNombres = nombreCaja.length;
    console.log(cantidadNombres);
    return;
}

function seleccionarNombre (){
    let numeroRandom = Math.floor(Math.random()*nombreCaja.length)+1;
    console.log(numeroRandom);
}
