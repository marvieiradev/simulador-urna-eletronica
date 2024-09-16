let tela = document.getElementById("tela");
var statusVoto = 0; //0: vereador, 1: prefeito, 2:fim
let numero = ""
let votoVereador = ""
let votoPrefeito = ""

tela.innerHTML = telaVereador;
mostraAnim();

function verificaNum(num) {
    numero += num;
    document.getElementById("n" + numero.length).innerText = num;
    if (numero.length == 2 && statusVoto == 1) {
        votoPrefeito = numero;
        mostrarTudo()
    } else if (statusVoto == 0) {
        if (numero.length == 2) {
            mostraLegenda()
        } else if (numero.length == 5) {
            votoVereador = numero;
            mostrarTudo()
        }
    }
    mostraAnim();
}

function mostraLegenda() {
    document.getElementById("nome").style.opacity = 1
    document.getElementById("tx-numero").style.opacity = 1
    let achouPartido = false;
    for (partido of partidos) {
        if (numero.includes(partido.legenda)) {
            document.getElementById("partido").style.opacity = 1
            document.getElementById("partido").innerText = "Partido: " + partido.nome;
            document.getElementById("nome").innerText = "(voto na legenda)";
            achouPartido = true;
        }
    }
    if (!achouPartido) {
        numErrado()
    }
}

function mostrarTudo() {
    document.getElementById("tx-numero").style.opacity = 1
    document.getElementById("nome").style.opacity = 1
    document.getElementById("partido").style.opacity = 1
    if (statusVoto == 0) {
        let achouVereador = false;
        for (vereador of vereadores) {
            if (numero.includes(vereador.numero)) {
                document.getElementById("nome").innerText = "Nome: " + vereador.nome;
                document.getElementById("foto1").style.backgroundImage = `url(${vereador.foto})`;
                achouVereador = true;
            }
        }
        if (!achouVereador) {
            numErrado()
        }
    }

    if (statusVoto == 1) {
        let achouPrefeito = false;
        for (prefeito of prefeitos) {
            if (numero.includes(prefeito.numero)) {
                document.getElementById("nome").innerText = "Nome: " + prefeito.nome + "\nVice: " + prefeito.vice;
                document.getElementById("foto1").style.backgroundImage = `url(${prefeito.foto1})`;
                document.getElementById("foto2").style.backgroundImage = `url(${prefeito.foto2})`;
                document.getElementById("partido").innerText = "Partido: " + partido.nome;
                achouPrefeito = true;
            }
        }
        if (!achouPrefeito) {
            numErrado()
        }
    }
}

function mostraAnim() {
    if (numero.length == 0) {
        document.getElementById("num1").style.animation = "anim 1s ease infinite";
    } else {
        if (statusVoto == 0) {
            if (numero.length <= 4) {
                document.getElementById("num" + numero.length).style.animation = "none";
                document.getElementById("num" + (numero.length + 1)).style.animation = "anim 1s ease infinite";
            } else {
                document.getElementById("num" + numero.length).style.animation = "none";
            }
        }

        if (statusVoto == 1) {
            if (numero.length <= 1) {
                document.getElementById("num" + numero.length).style.animation = "none";
                document.getElementById("num" + (numero.length + 1)).style.animation = "anim 1s ease infinite";
            } else {
                document.getElementById("num" + numero.length).style.animation = "none";
            }
        }
    }
}

function confirma() {
    if (numero.length >= 2) {
        if (statusVoto == 0) {
            if (numero.length == 2) {
                votoVereador = numero + "--- (VOTO LEGENDA)";
            }
            tela.innerHTML = telaPrefeito;
            statusVoto = 1
            numero = ""
            tocarAudio(1)
        } else if (statusVoto == 1) {
            finalizar();
            tocarAudio(1)
        }
        mostraAnim()
    }
}

function numErrado() {
    document.getElementById("partido").style.opacity = 0;
    document.getElementById("nome").innerText = "NÚMERO ERRADO";
    document.getElementById("atencao").innerText = "VOTO NULO"
    document.getElementById("instrucao").innerText = "CONFIRMA para PROSSEGUIR\nCORRIGE para REINICIAR este voto"
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
    if (statusVoto == 2) { return }
    document.getElementById("atencao").innerText = "VOTO EM BRANCO"
    document.getElementById("instrucao").innerText = "CONFIRMA para PROSSEGUIR\nCORRIGE para REINICIAR este voto"
}

function nulo() {
    if (statusVoto == 0) { votoVereador = "NULO" }
    if (statusVoto == 1) { votoPrefeito = "NULO" }
}

function finalizar() {
    statusVoto = 2;
    tela.innerHTML = telaGravando;
    setTimeout(() => { tela.innerHTML = telaFim, tocarAudio(2) }, 500)
    console.log("VOTO FINALIZADO" + "\nVereador: " + votoVereador + "\nPrefeito: " + votoPrefeito);
    document.getElementById("reiniciar").style.opacity = 1;
    document.getElementById("numeros-validos").style.opacity = 0;
}

function tocarAudio(tipo) {
    const inter = document.getElementById("inter");
    const fim = document.getElementById("fim");
    switch (tipo) {
        case 1:
            inter.play();
            break
        case 2:
            fim.play();
            break
    }
}

function reiniciar() {
    window.location.reload();
}