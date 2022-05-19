let sair = document.querySelector('.sair');
let calculadora = document.querySelector('.calculadora');
let botaoAbrir = document.querySelector('#abrir');

// FUNÇÕES DE FECHAR E ABRIR A CALCULADORA
function fecharCalculadora() {
    calculadora.classList.add('sumir');
    botaoAbrir.classList.remove('escondido');
}
sair.addEventListener('click', fecharCalculadora);

function abrirCalculadora() {
    calculadora.classList.remove('sumir');
    botaoAbrir.classList.add('escondido');
    valor.value = '';
}
botaoAbrir.addEventListener('click', abrirCalculadora);

function expandir() {
    if(calculadora.style.width == '930px') {
        calculadora.style.width = '310px'
        calculadora.style.height = '500px'
    } else {
        calculadora.style.width = '930px'
        calculadora.style.height = '530px'
    }
}

// VISOR

let valor = document.querySelector('#valor');

function adicionar(num) {
    valor.value += num
}

function limpar() {
    valor.value = '';
}

function limparUlt() {
    let resultado = valor.value;

    valor.value = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = valor.value;
    if(resultado) {
        valor.value = eval(resultado)
    }
}