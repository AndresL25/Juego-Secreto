let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',`el numero es menor a ${numeroDeUsuario}`);
        } else {
            asignarTextoElemento('p',`el numero es mayor a ${numeroDeUsuario}`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';;
}

function nuevoJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    } else {

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del número secreto!');
    asignarTextoElemento('p', `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();





/*
let numeros = [5,4,2,6,1];
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
let suma = 0;
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function elementosLista(){
    return console.log(lenguagesDeProgramacion);
}


function inversoLista(){
    return console.log(lenguagesDeProgramacion.reverse());
}
let j = 0;
function promedioNumero(){
    for (i=0; i<numeros.length; i++){
        suma = suma + numeros[i];
    }
       let nn = parseInt(numeros);
         console.log(typeof(nn));
         console.log(nn);
        //j = Math.min(numeros);
        //console.log(j);
        //console.log(Math.max(numeros));
       // return console.log(suma/numeros.length);
}

elementosLista();
inversoLista();
promedioNumero();*/
