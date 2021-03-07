//Añadirles un evento click a los tokens 
tokens.forEach(function (elemento) {    
    elemento.element.addEventListener('click', function (){
        focus = elemento.element;
        tokenPicked = elemento.name;
        printPicked(focus);                    
    });         
});

/*Esta funcion tiene como parametro el elemento que ha sido seleccionado,
oculta el tablero del step 1 y visibiliza el tablero del step 2 con 
la ficha seleccionada*/
function printPicked (focus){ 
    focus = focus.firstElementChild;
    document.getElementById('step-1').classList.add('hide');    
    document.getElementById('step-2').classList.remove('hide');    
            
    document.getElementById('picked').appendChild(focus);    ;    
    // homeTokenAnimation();
}

function randomNumber (){
    let random = Math.floor(Math.random()*3);
    return random;
}

function homeTokenAnimation (){
    let contador = 0;     
    let nuevoToken = document.createElement('div');
    let intervalo = setInterval(
        function (){            
            let random = randomNumber();                           
            nuevoToken.setAttribute('class', tokenHome[random].class);            
            nuevoToken.innerHTML = tokenHome[random].child;
            home.appendChild(nuevoToken);            
            contador++;    
            if(contador == 10){
                clearInterval(intervalo);                
                compararGanador(tokenPicked, tokenHome[random].name);
            }
        }
    , 200);    
}

function compararGanador (tokenPicked, homeToken){    
    if(tokenPicked == homeToken){
        console.log('empate');
    }else if(tokenPicked === 'paper' && homeToken === 'rock'
    || tokenPicked === 'scissor' && homeToken === 'paper'
    || tokenPicked === 'rock' && homeToken === 'scissor'){
        console.log('Ganaste');
    }else{
        console.log('Perdiste');
    }
}