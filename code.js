const resultado = document.querySelector('.result'); 
const confirmar =  document.querySelector('.igual'); 

function  inserir( valor ){ 
     resultado.innerHTML  +=  valor; 
}

function clean(){
    resultado.innerHTML = ' '; 
}

function backSpace(){ 
    if( resultado.textContent ){
        let result = document.getElementById('resultado').innerHTML 
        resultado.innerHTML = result.substring(0, result.length -1 ); 
    }
}


function confirma(){
     if( resultado.textContent != 'erro' ){
         document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
     }
}
