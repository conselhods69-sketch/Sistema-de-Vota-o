let votos = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, nulo: 0, branco: 0 };
let votoAtual = "";

function inserir(valor) {
    votoAtual = valor;
    document.getElementById("visor").innerHTML = valor;
}

function corrige() {
    votoAtual = "";
    document.getElementById("visor").innerHTML = "0";
}

function votar() {
    if (votoAtual === "") {
        alert("Digite um número antes de confirmar!");
        return;
    }

    if (votoAtual == 7) votos.nulo++;
    else if (votoAtual == 8) votos.branco++;
    else votos[votoAtual]++;

    alert("✅ Voto confirmado!");
    corrige();
}

function mostrarResultado() {
    alert(`RESULTADOS:\nHenry (01): ${votos[1]}\nMiguel (02): ${votos[2]}\nFabio (03): ${votos[3]}\nMatheus (04): ${votos[4]}\nJosé (05): ${votos[5]}\nHenrique (06): ${votos[6]}\nNulos: ${votos.nulo}\nBrancos: ${votos.branco}`);
}
