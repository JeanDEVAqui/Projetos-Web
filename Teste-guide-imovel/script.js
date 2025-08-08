function toggleMenu() {
  document.querySelector('.menu-esquerda').classList.toggle('show');
  document.querySelector('.menu-direita').classList.toggle('show');
}

function verTelefone(button) {
  button.textContent = button.textContent === 'Ver Telefone' ? '(99) 99999-9999' : 'Ver Telefone';
}

function enviarMensagem() {
  const cpf = document.getElementById('cpf').value;
  const cpfNumeros = cpf.replace(/\D/g, '');
  if (cpfNumeros.length !== 11) {
    alert('CPF deve conter 11 números.');
    return;
  }
  alert('Mensagem enviada com sucesso!');
  document.getElementById('cpf').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('assunto').value = '';
}

function calcularRegra3() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);
  if (!isNaN(a) && !isNaN(b) && !isNaN(c) && b !== 0) {
    const resultado = (c * b) / a;
    document.getElementById('resultado').innerText = resultado.toFixed(2);
  } else {
    document.getElementById('resultado').innerText = 'Erro';
  }
}

function abrirModal() {
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    fecharModal();
  }
}

document.getElementById('cpf').addEventListener('input', function (e) {
  let v = e.target.value.replace(/\D/g, '');
  v = v.slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = v;
});

document.getElementById('telefone').addEventListener('input', function (e) {
  let v = e.target.value.replace(/\D/g, '');
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
  if (v.length > 10) {
    v = v.replace(/(\d{5})(\d{4})$/, '$1-$2');
  } else {
    v = v.replace(/(\d{4})(\d{4})$/, '$1-$2');
  }
  v = v.slice(0, 15);
  e.target.value = v;
});

document.querySelectorAll('.zoom-anim-img').forEach(function(img) {
  img.addEventListener('click', function() {
    img.style.animation = 'none';
    // Força o reflow para reiniciar a animação
    void img.offsetWidth;
    img.style.animation = 'zoomOutAnim 5s ease';
  });
});

document.getElementById("downloadButton").addEventListener("click", function () {
  const printable = document.getElementById("printable");
  html2canvas(printable).then(canvas => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "imovel-guide.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});