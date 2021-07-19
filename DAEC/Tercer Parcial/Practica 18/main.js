window.onload = iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener('click',validar,false);
}
function ValidaNombre(){
    var elemento = document.getElementById("Nombre");
    if (!elemento.checkValidity()){
        if(elemento.validity.patternMismatch){
            error2(elemento, "El nombre debe tener entre 2 a 15 características");
        }
        //Error (elemento);
        return false;
    }
}

function validaEdad(){
    var elemento = document.getElementById("edad");
    if (!elemento.validity.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir una edad");
        }
        if(elemento.validity.rangeOverflow){
            error2(elemento,"El valor debe ser menor a 100");
        }
        if(elemento.validity.rangeUnderflow){
            error2(elemento,"El valor debe ser igual o mayor a 18");
        }
        //error(elemento);
        return false;
    }
    return true;
}

function validaTelefono(){
    var elemento = document.getElementById("telefono");
    if(!elemento.validity.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un telefono");
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El telefono debe tener 10 digitos");
        }
        //error(elemento);
        return false;
    }
    return true;
}

//Termino de codigo formulario

function validar(e){
    borrarError();
    if(validaEdad && validaTelefono && ValidaNombre && confirm("pulsar aceptar si deseas enviar este formulario")){
        return true;
    }else {
        e.preventDefault();
        return false;
    }
}

function error(elemento){
    document.getElementById("mensajeError").innerHTML =
    elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

function borrarError(){
    var formulario=document.forms[0];
    for(var i=0; i < formulario.elements.length; i++){
        formulario.elements[i].className="";
    }
}