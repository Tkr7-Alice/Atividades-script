const btn = window.document.getElementById('btn1');

const saida = window.document.getElementById('saida');

function exibirMensagem(mensagem){
    saida.textContent = mensagem;
}

btn.addEventListener('click', function(){
    let num = window.prompt('Digite um número');

    if(num % 2 == 0){
        exibirMensagem('É par'); 
    }else {
        exibirMensagem('É impar');
    }
}
);
