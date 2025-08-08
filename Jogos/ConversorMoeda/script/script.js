function converterWon() {
    let won = 0.0040;
    let valorWon = document.getElementById("valorWon").value;
    let resultadoWonEl = document.getElementById("resultadoWon");

    if (valorWon.trim() !== "" && !isNaN(valorWon)) {
        let resultadoWon = parseFloat(valorWon) * won;
        resultadoWonEl.value = `R$ ${resultadoWon.toFixed(2)}`;
    } else {
        resultadoWonEl.value = "Insira um valor válido";
    }
}

function converterDolar() {
    let dolar = 5.74;
    let valorDolar = document.getElementById("valorDolar").value;
    let resultadoDolarEl = document.getElementById("resultadoDolar");

    if (valorDolar.trim() !== "" && !isNaN(valorDolar)) {
        let resultadoDolar = parseFloat(valorDolar) * dolar;
        resultadoDolarEl.value = `R$ ${resultadoDolar.toFixed(2)}`;
    } else {
        resultadoDolarEl.value = "Insira um valor válido";
    }
}