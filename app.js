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
    
    asignarNombres("h2",`Se Muestran los Nombres`); 
    asignarNombres("h3",nombreCaja);
    document.getElementById("lista").stylecolor="red";
    
    document.getElementById("nombre").value="";
}
    let cantidadNombres = nombreCaja.length;
    return;
}

function seleccionarNombre (){
if(nombreCaja.length === 1){
    alert("Ingresa más de un Nombre");
}else{
    if (nombreCaja.length === 0){
        alert("Ingresa al menos dos nombres para continuar");

    }else{
        document.getElementById("agregar").setAttribute("disabled","true");
        document.getElementById("nombre").setAttribute("disabled","true");

        let numeroRandom = Math.floor(Math.random()*nombreCaja.length);
        asignarNombres("h2",`El Amigo Seleccionado es ${nombreCaja[numeroRandom]}`);
        asignarNombres("h3","----------------------------");
    }
}
}