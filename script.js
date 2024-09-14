let tela = document.getElementById("tela");
var statusVoto = 0; //0: vereador, 1: prefeito, 2:fim
let numero = ""
let votoVereador = ""
let votoPrefeito = ""

tela.innerHTML = telaVereador;

function verificaNum(num) {
    numero += num;
    if (numero.length <= 5) {
        document.getElementById("n" + numero.length).innerText = num;
    }

    if (numero.length == 2 && statusVoto == 1) {
        votoPrefeito = numero;
        mostrarTudo()
    } else if (numero.length == 5 && statusVoto == 0) {
        votoVereador = numero;
        mostrarTudo()
    }
}

function mostrarTudo() {
    document.getElementById("tx-numero").style.opacity = 1
    document.getElementById("nome").style.opacity = 1
    document.getElementById("partido").style.opacity = 1

    document.getElementById("nome").innerText = "Nome: 5555";
    document.getElementById("partido").innerText = "Partido: AAAAAA";
    document.getElementById("foto1").style.backgroundImage = "url(img.jpg";
}

function confirma() {
    numero = ""
    if (statusVoto == 0) {
        tela.innerHTML = telaPrefeito;
        statusVoto = 1
    } else if (statusVoto == 1) {
        finalizar();
    }

}

function corrige() {
    numero = "";
    if (statusVoto == 0) {
        tela.innerHTML = telaVereador;
    } else if (statusVoto == 1) {
        tela.innerHTML = telaPrefeito;
    }
}

function branco() {
    corrige()
    if (statusVoto == 0) { votoVereador = "BRANCO" }
    if (statusVoto == 1) { votoPrefeito = "BRANCO" }
    document.getElementById("atencao").innerText = "VOTO EM BRANCO"
}

function finalizar() {
    tela.innerHTML = telaFim;
    console.log("Vereador: " + votoVereador);
    console.log("Prefeito: " + votoPrefeito);
}