let numeros = [];

function adicionarNumero() {
    const input = document.querySelector('.numero');
    const numeroDigitado = parseInt(input.value);
    const divErro = document.getElementById('erro');
    // Limpar mensagem de erro anterior
    divErro.textContent = '';
    
    // Validações
    if (isNaN(numeroDigitado)) {
        divErro.textContent = 'Por favor, digite um número válido!';
        input.focus();
        return;
    }
    
    if (numeroDigitado < 1 || numeroDigitado > 100) {
        divErro.textContent = 'O número deve estar entre 1 e 100!';
        input.focus();
        return;
    }
    
    if (numeros.includes(numeroDigitado)) {
        divErro.textContent = 'Este número já foi adicionado!';
        input.focus();
        return;
    }
    
    // Adicionar número ao array
    numeros.push(numeroDigitado);
    
    // Atualizar exibição dos números
    atualizarListaNumeros();
    
    // Limpar input
    input.value = '';
    input.focus();
    
    // Ocultar resultados se estiverem sendo exibidos
    document.getElementById('resultados').style.display = 'none';
}

function atualizarListaNumeros() {
    const divNumerosAdicionados = document.getElementById('numerosAdicionados');
    
    if (numeros.length === 0) {
        divNumerosAdicionados.textContent = 'Nenhum número adicionado.';
    } else {
        // Ordenar números para exibição
        const numerosOrdenados = [...numeros].sort((a, b) => a - b);
        divNumerosAdicionados.textContent = numerosOrdenados.join(', ');
    }
}

function finalizarAnalise() {
    const divErro = document.getElementById('erro');
    const divResultados = document.getElementById('resultados');
    const divAnaliseCompleta = document.querySelector('.analiseCompleta');
    
    // Limpar erro
    divErro.textContent = '';
    
    if (numeros.length === 0) {
        divErro.textContent = 'Adicione pelo menos um número antes de finalizar a análise!';
        return;
    }
    
    // Calcular estatísticas
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    const quantidade = numeros.length;
    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = (soma / quantidade).toFixed(2);
    

    // Contar números pares e ímpares
    const pares = numeros.filter(num => num % 2 === 0);
    const impares = numeros.filter(num => num % 2 !== 0);
    
    // Criar análise HTML
    const analiseHTML = `
        <div style="display: grid; gap: 15px;">
            <div><strong>Total de números cadastrados:</strong> ${quantidade}</div>
            <div><strong>Menor valor:</strong> ${menor}</div>
            <div><strong>Maior valor:</strong> ${maior}</div>
            <div><strong>Soma de todos os valores:</strong> ${soma}</div>
            <div><strong>Números pares (${pares.length}):</strong> ${pares.length > 0 ? pares.sort((a,b) => a-b).join(', ') : 'Nenhum'}</div>
            <div><strong>Números ímpares (${impares.length}):</strong> ${impares.length > 0 ? impares.sort((a,b) => a-b).join(', ') : 'Nenhum'}</div>
            <div><strong>Média:</strong> ${media}</div>
            <div><strong>Todos os números em ordem decrescente:</strong> ${numerosOrdenados.reverse().join(', ')}</div>
        </div>
    `;
    
    divAnaliseCompleta.innerHTML = analiseHTML;
    divResultados.style.display = 'block';
}

function limparTudo() {
    const input = document.querySelector('.numero');
    const divErro = document.getElementById('erro');
    const divResultados = document.getElementById('resultados');
    
    // Limpar array
    numeros = [];
    
    // Limpar input
    input.value = '';
    
    // Limpar erro
    divErro.textContent = '';
    
    // Ocultar resultados
    divResultados.style.display = 'none';
    
    // Atualizar lista
    atualizarListaNumeros();
    
    // Focar no input
    input.focus();
}

    // Permitir adicionar número pressionando Enter
    document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.numero');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarNumero();
        }
    });
    
    // Focar no input ao carregar a página
    input.focus();
});