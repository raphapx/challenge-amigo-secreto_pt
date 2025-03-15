// Seleciona os elementos da página
const inputNome = document.getElementById('nome');
const botaoAdicionar = document.getElementById('adicionar');
const listaAmigos = document.getElementById('lista-amigos');
const botaoSortear = document.getElementById('sortear');
const resultado = document.getElementById('resultado');

// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um nome à lista
botaoAdicionar.addEventListener('click', () => {
    const nome = inputNome.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a lista na tela
    inputNome.value = ''; // Limpa o campo de texto
});

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpa a lista atual
    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
botaoSortear.addEventListener('click', () => {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois nomes para sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];
    resultado.textContent = `O amigo secreto é: ${amigoSecreto}`;
});