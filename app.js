let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10




function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste el número en  ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Si el usuario no acertó...
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++
        limpiarCaja();
        }
    return;
    }

    function limpiarCaja(){
        let valorCaja = document.querySelector('#valorUsuario');
        valorCaja.value = '';
    }
function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya salieron todos los números posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
             }   
        }
  }

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números(inicio)
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabiltar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();



    
  

    