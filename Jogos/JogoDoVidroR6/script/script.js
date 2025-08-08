let rodada = 1;

function jogar() {
  const input = document.getElementById("escolhaVidro");
  const mensagem = document.getElementById("mensagemResultado");
  const nivelTexto = document.getElementById("nivelTexto");
  const escolha = parseInt(input.value);

  if (rodada > 3) {
    mensagem.textContent = "O jogo acabou! Recarregue a página para jogar novamente.";
    return;
  }

  if (isNaN(escolha) || escolha < 1 || escolha > 3) {
    mensagem.textContent = "Número inválido, escolha 1, 2 ou 3!";
    return;
  }

  const pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  if (escolha === pisoQuebrado) {
    mensagem.textContent = `O piso ${escolha} quebrou! Você perdeu na rodada ${rodada}.`;
    rodada = 4;
    nivelTexto.textContent = "Fim de jogo!";
  } else {
    mensagem.textContent = `Você escolheu o vidro ${escolha} e passou com sucesso!`;
    rodada++;

    if (rodada <= 3) {
      nivelTexto.textContent = `Nível ${rodada} - Escolha um vidro (1 a 3):`;
    } else {
      mensagem.textContent += " Parabéns, você venceu o jogo!";
      nivelTexto.textContent = "Fim de jogo!";
    }
  }

  input.value = "";
}
