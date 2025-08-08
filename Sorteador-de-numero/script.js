document.getElementById('sorteioForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const repetir = document.getElementById('repetir').checked;
  const resultado = document.getElementById('resultado');
  let numeros = [];

  if (min > max) {
    resultado.textContent = 'O valor mínimo deve ser menor que o máximo.';
    return;
  }

  if (!repetir && quantidade > (max - min + 1)) {
    resultado.textContent = 'Quantidade maior que o intervalo disponível sem repetição.';
    return;
  }

  while (numeros.length < quantidade) {
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    if (repetir || !numeros.includes(sorteado)) {
      numeros.push(sorteado);
    }
  }

  resultado.textContent = 'Números sorteados: ' + numeros.join(', ');
});