let button, quebraLinha, cont = 0, marcacao, contline = 1;
let tabuleiro = new Array(5);

for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(11);
}
for (let i = 0; i < tabuleiro.length; i++) {
    quebraLinha = document.createElement("br");
    document.body.append(quebraLinha);
    for (let j = 0; j < tabuleiro[i].length; j++) {
        button = document.createElement("button");
        button.setAttribute('type', 'button');
        if (j < 5) {
            button.setAttribute('id', 'bt' + i + "" + j);
            button.setAttribute('onclick', "marca(" + i + "," + j + ")");
        } else if (j == 5) {
            button.setAttribute('id', 'btVerifica' + i);
            button.setAttribute('onclick', "verificaSequencia(" + i + ")");
        } else {
            button.setAttribute('id', 'btResult' + i + "" + j);
        }
        if (i > 0) {
            button.disabled = true;
        }
        button.className = 'btJogo' + i + ' btJogoCol' + j;
        button.append(document.createTextNode(""));
        document.body.append(button);
    }
}
let h1 = document.createElement("h1");
h1.setAttribute('id', 'resultado');
document.body.append(h1);

function marca(linha, coluna) {
    if (coluna < 5) {
        marcacasa("bt" + linha + "" + coluna);
    }
}

function marcacasa(nomeBotao) {
    switch (cont) {
        case 0:
            document.getElementById(nomeBotao).style.backgroundColor = "purple";
            break;
        case 1:
            document.getElementById(nomeBotao).style.backgroundColor = "yellow";
            break;
        case 2:
            document.getElementById(nomeBotao).style.backgroundColor = "red";
            break;
        case 3:
            document.getElementById(nomeBotao).style.backgroundColor = "green";
            break;
        case 4:
            document.getElementById(nomeBotao).style.backgroundColor = "blue";
            break;
        case 5:
            document.getElementById(nomeBotao).style.backgroundColor = "orange";
            break;
        case 6:
            document.getElementById(nomeBotao).style.backgroundColor = "pink";
            break;
        default:
            document.getElementById(nomeBotao).style.backgroundColor = "purple";
            cont = 0;
    }
    marcacao = cont;
    cont++;
}

function verificaSequencia(linha) {
    if (document.getElementById("bt" + linha + "0").style.backgroundColor == "blue") {
        document.getElementById("btResult" + linha + "6").style.backgroundColor = "green";
    } else {
        document.getElementById("btResult" + linha + "6").style.backgroundColor = "red";
    }
    document.getElementById("btResult" + linha + "6").disabled = true;

    if (document.getElementById("bt" + linha + "1").style.backgroundColor == "purple") {
        document.getElementById("btResult" + linha + "7").style.backgroundColor = "green";
    } else {
        document.getElementById("btResult" + linha + "7").style.backgroundColor = "red";
    }
    document.getElementById("btResult" + linha + "7").disabled = true;

    if (document.getElementById("bt" + linha + "2").style.backgroundColor == "yellow") {
        document.getElementById("btResult" + linha + "8").style.backgroundColor = "green";
    } else {
        document.getElementById("btResult" + linha + "8").style.backgroundColor = "red";
    }
    document.getElementById("btResult" + linha + "8").disabled = true;

    if (document.getElementById("bt" + linha + "3").style.backgroundColor == "pink") {
        document.getElementById("btResult" + linha + "9").style.backgroundColor = "green";
    } else {
        document.getElementById("btResult" + linha + "9").style.backgroundColor = "red";
    }
    document.getElementById("btResult" + linha + "9").disabled = true;

    if (document.getElementById("bt" + linha + "4").style.backgroundColor == "purple") {
        document.getElementById("btResult" + linha + "10").style.backgroundColor = "green";
    } else {
        document.getElementById("btResult" + linha + "10").style.backgroundColor = "red";
    }
    document.getElementById("btResult" + linha + "10").disabled = true;

    for (let x = 0; x < 5; x++) {
        document.getElementById("bt" + contline + "" + x).disabled = false;
    }

    document.getElementById("btVerifica" + contline).disabled = false;

    contline++;
}
