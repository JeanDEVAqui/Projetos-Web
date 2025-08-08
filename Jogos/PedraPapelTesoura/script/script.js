function jogar() {
    let idade = parseInt(document.getElementById("idade").value);
    let escolhajogador = parseInt(document.getElementById("escolha").value);
    let resultado = document.getElementById("resultado");
  
    if (isNaN(idade)) {
      alert("Por favor, digite uma idade válida.");
      return;
    }
  
    if (idade < 18) {
      alert("Você não pode jogar jokenpo");
      return;
    }
  
    if (escolhajogador < 1 || escolhajogador > 3) {
      alert("Você escolheu um valor inválido!");
      return;
    }
  
    let escolhapc = Math.floor(Math.random() * 3) + 1;
  
    const opcoes = ["", "Pedra", "Papel", "Tesoura"];
  
    if (escolhajogador === escolhapc) {
      resultado.textContent = `Você escolheu: ${opcoes[escolhajogador]}. O PC escolheu: ${opcoes[escolhapc]}. Deu empate!`;
    } else if (
      (escolhajogador === 1 && escolhapc === 2) ||
      (escolhajogador === 2 && escolhapc === 3) ||
      (escolhajogador === 3 && escolhapc === 1)
    ) {
      resultado.textContent = `Você escolheu: ${opcoes[escolhajogador]}. O PC escolheu: ${opcoes[escolhapc]}. PC venceu!`;
    } else {
      resultado.textContent = `Você escolheu: ${opcoes[escolhajogador]}. O PC escolheu: ${opcoes[escolhapc]}. Você venceu!`;
    }
  }
  