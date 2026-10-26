// Seleciona todos os botões "Adicionar" da tela
const botoesAdicionar = document.querySelectorAll('.btn-adicionar');

// Seleciona o número que aparece sobre o ícone do carrinho
const contadorHtml = document.getElementById('contador-carrinho');

// Variável para armazenar a quantidade atual de itens
let totalNoCarrinho = 0;

// Atualiza o número visível e o rótulo acessível do botão do carrinho
function atualizarContadorCarrinho(quantidade) {
    // Interrompe a função se os elementos do carrinho não estiverem na página
    if (!contadorHtml) {
        return;
    }

    // Atualiza o número mostrado sobre o ícone
    contadorHtml.textContent = quantidade;

    // Atualiza o rótulo para leitores de tela
    const botaoCarrinho = document.querySelector('.botao-carrinho');

    if (botaoCarrinho) {
        botaoCarrinho.setAttribute(
            'aria-label',
            `Carrinho: ${quantidade} ${quantidade === 1 ? 'item' : 'itens'}`
        );
    }
}

// Aumenta o contador e atualiza a tela quando um botão é clicado
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        totalNoCarrinho++;
        atualizarContadorCarrinho(totalNoCarrinho);
    });
});