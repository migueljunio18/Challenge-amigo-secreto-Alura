let amigos = [];
let sorteado = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "" || !isNaN(nome)) {
        alert("Escolha um nome válido");
        return;
    }

    amigos.push(nome);
    atualizarLista();

    input.value = "";
}
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.length - 1 ? "," : "");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Sua lista de amigos está vazia");
        return;
    }

    if (amigos.length < 4) {
        alert("Para realizar o sorteio, é preciso 4 pessoas ou mais.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
     
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Seu amigo secreto é: " + amigoSorteado;

    sorteado.push(amigoSorteado);

    
}
