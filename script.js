const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirma-senha').value;

    let textoErro = '';

    if (senha.length < 6) {
        textoErro = 'A senha deve ter pelo menos 6 caracteres.';
    } else if (senha !== confirmaSenha) {
        textoErro = 'As senhas não são iguais. Confira os campos.';
    }

    if (textoErro) {
        mostrarNotificacao(textoErro);
        return;
    }

    const nomeDigitado = document.getElementById('nome').value;
    console.log('Cadastro validado com sucesso!');
    console.log('Cliente:', nomeDigitado);

    window.location.href = "cardapio.html";
});

function mostrarNotificacao(texto) {
    document.querySelector('.aviso-lanchonete')?.remove();

    const aviso = document.createElement('div');
    aviso.className = 'aviso-lanchonete';
    aviso.setAttribute('role', 'alert');

    aviso.innerHTML = `
        <div class="aviso-conteudo">
            <button class="aviso-fechar" type="button" aria-label="Fechar aviso">×</button>
            <span class="aviso-titulo">Ops! Confira seu cadastro</span>
            <p class="aviso-texto"></p>
        </div>

        <div class="caixa-lanche" aria-hidden="true">
            <div class="hamburguer">
                <span class="pao"></span>
                <span class="gergelim"></span>
                <span class="alface"></span>
                <span class="queijo"></span>
                <span class="carne"></span>
                <span class="pao-base"></span>
            </div>
            <div class="caixa-fundo"></div>
            <div class="caixa-frente"></div>
            <div class="caixa-tampa"></div>
        </div>
    `;

    aviso.querySelector('.aviso-texto').textContent = texto;
    document.body.appendChild(aviso);

    aviso.querySelector('.aviso-fechar').addEventListener('click', () => {
        aviso.classList.add('aviso-fechando');
        setTimeout(() => aviso.remove(), 300);
    });

    setTimeout(() => {
        if (aviso.isConnected) {
            aviso.classList.add('aviso-fechando');
            setTimeout(() => aviso.remove(), 300);
        }
    }, 5000);
}

// AULA 02