let tela = document.getElementById("tela");
var statusS = 0; //0: vereador, 1: prefeito, 2:fim

let numero = ""
let telaVereador = `
                <div class="tela-voto">
                    <div class="infos">
                        <div>SEU VOTO PARA</div>
                        <div class="titulo">Vereador</div>
                        <div class="numero">
                            <div id="tx-numero">Número:</div>
                            <div class="num"><span id="n1"></span></div>
                            <div class="num"><span id="n2"></span></div>
                            <div class="num"><span id="n3"></span></div>
                            <div class="num"><span id="n4"></span></div>
                            <div class="num"><span id="n5"></span></div>
                        </div>
                        <div id="nome">Nome:</div>
                        <div id="partido">Partido:</div>
                        <div id="atencao">VOTO NULO</div>
                    </div>
                    <div class="fotos">
                        <div id="foto1"></div>
                    </div>
                </div>
                <div class="tela-info">
                    Aperte a tecla:
                    <span>CONFIRMA para CONFIRMAR este voto<br>CORRIGE para REINICIAR este voto</span>
                </div>
`;

let telaPrefeito = `
                <div class="tela-voto">
                    <div class="infos">
                        <div>SEU VOTO PARA</div>
                        <div class="titulo">Prefeito</div>
                        <div class="numero">
                            <div id="tx-numero">Número:</div>
                            <div class="num"><span id="n1"></span></div>
                            <div class="num"><span id="n2"></span></div>
                        </div>
                        <div id="nome">Nome:</div>
                        <div id="partido">Partido:</div>
                        <div id="atencao">VOTO NULO</div>
                    </div>
                    <div class="fotos">
                        <div id="foto1"></div>
                    </div>
                </div>
                <div class="tela-info">
                    Aperte a tecla:
                    <span>CONFIRMA para CONFIRMAR este voto<br>CORRIGE para REINICIAR este voto</span>
                </div>
`;

let telaFim = `
                <div class="tela-fim">
                    <div class="fim">FIM</div>
                    <div class="votou">VOTOU</div>
                </div>
`;

tela.innerHTML = telaVereador;

function verificaNum(num) {
    numero += num;
    document.getElementById("n" + numero.length).innerText = num;
    if (numero.length == 2 && statusS == 1) {
        mostrarTudo()
        statusS = 2
    } else if (numero.length == 5 && statusS == 0) {
        mostrarTudo()
        statusS = 1
    }
}

function mostrarTudo() {
    document.getElementById("tx-numero").style.opacity = 1
    document.getElementById("nome").style.opacity = 1
    document.getElementById("partido").style.opacity = 1

    document.getElementById("nome").innerText = "Nome: 5555";
    document.getElementById("partido").innerText = "Partido: AAAAAA";
    document.getElementById("foto1").style.backgroundImage = "url(img.jpg";
    numero = ""
}

function confirma() {
    if (statusS == 1) {
        tela.innerHTML = telaPrefeito;
    } else if (statusS == 2) {
        tela.innerHTML = telaFim;
    }
}