function calcularInss(salarioBruto) {
    // Faixas de INSS 2025 (valores aproximados)
    if (salarioBruto <= 1412.00) return salarioBruto * 0.075;
    if (salarioBruto <= 2666.68) return (1412 * 0.075) + ((salarioBruto - 1412) * 0.09);
    if (salarioBruto <= 4000.03) return (1412 * 0.075) + (1254.68 * 0.09) + ((salarioBruto - 2666.68) * 0.12);
    if (salarioBruto <= 7786.02) return (1412 * 0.075) + (1254.68 * 0.09) + (1333.35 * 0.12) + ((salarioBruto - 4000.03) * 0.14);
    return 908.85; // Teto do INSS em 2025 (aproximado)
}

function calcularIrpf(salarioBaseIrpf) {
    // Faixas de IRPF 2025 (valores ajustados, isenção até 2112,00 - aproximado)
    if (salarioBaseIrpf <= 2112.00) return 0; // Isento
    if (salarioBaseIrpf <= 2826.65) return (salarioBaseIrpf - 2112.00) * 0.075; 
    if (salarioBaseIrpf <= 3751.05) return (714.65 * 0.075) + ((salarioBaseIrpf - 2826.65) * 0.15); 
    if (salarioBaseIrpf <= 4664.68) return (714.65 * 0.075) + (924.40 * 0.15) + ((salarioBaseIrpf - 3751.05) * 0.225);
    return (714.65 * 0.075) + (924.40 * 0.15) + (913.63 * 0.225) + ((salarioBaseIrpf - 4664.68) * 0.275); 
}

function calcularSalario() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value) || 0;
    const horasExtras = parseFloat(document.getElementById('horasExtras').value) || 0;
    const bonus = parseFloat(document.getElementById('bonus').value) || 0;

    if (salarioBase <= 0) {
        alert("Por favor, insira um salário base válido.");
        return;
    }

    // Cálculos
    const totalAdicionais = horasExtras + bonus;
    const salarioBruto = salarioBase + totalAdicionais;
    const descontoInss = calcularInss(salarioBruto);
    const baseIrpf = salarioBruto - descontoInss;
    const descontoIrpf = calcularIrpf(baseIrpf);
    const totalDescontos = descontoInss + descontoIrpf;
    const salarioLiquido = salarioBruto - totalDescontos;

    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>Detalhamento do Cálculo</h3>
        <div class="detalhe">Salário Base: <span class="positivo">R$ ${salarioBase.toFixed(2)}</span></div>
        <div class="detalhe">Horas Extras: <span class="positivo">R$ ${horasExtras.toFixed(2)}</span></div>
        <div class="detalhe">Bônus: <span class="positivo">R$ ${bonus.toFixed(2)}</span></div>
        <div class="detalhe">Salário Bruto: <span class="positivo">R$ ${salarioBruto.toFixed(2)}</span></div>
        <div class="detalhe">Desconto INSS: <span class="negativo">- R$ ${descontoInss.toFixed(2)}</span></div>
        <div class="detalhe">Desconto IRPF: <span class="negativo">- R$ ${descontoIrpf.toFixed(2)}</span></div>
        <div class="detalhe">Total Descontos: <span class="negativo">R$ ${totalDescontos.toFixed(2)}</span></div>
        <div class="detalhe"><strong>Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</strong></div>
    `;
}