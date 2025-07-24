document.addEventListener('DOMContentLoaded', () => {
    const oldPriceInput = document.getElementById('oldPrice');
    const newPriceInput = document.getElementById('newPrice');
    const checkPriceButton = document.getElementById('checkPrice');
    const resultDiv = document.getElementById('result');

    checkPriceButton.addEventListener('click', () => {
        const oldPrice = parseFloat(oldPriceInput.value);
        const newPrice = parseFloat(newPriceInput.value);

        // Limpa resultados anteriores
        resultDiv.innerHTML = '';

        if (isNaN(oldPrice) || isNaN(newPrice)) {
            resultDiv.innerHTML = '<p class="no-change">Por favor, insira valores numéricos válidos para ambos os preços.</p>';
            return;
        }

        let message = '';
        let changeAmount = newPrice - oldPrice;
        let percentageChange = (changeAmount / oldPrice) * 100;

        message += `<p>Preço antigo: <strong>R$ ${oldPrice.toFixed(2)}</strong></p>`;
        message += `<p>Preço atual: <strong>R$ ${newPrice.toFixed(2)}</strong></p>`;

        if (newPrice > oldPrice) {
            message += `<p class="increase">O preço <strong>AUMENTOU</strong>!</p>`;
            message += `<p>Aumento de: <strong>R$ ${changeAmount.toFixed(2)}</strong></p>`;
            message += `<p>Variação para cima: <strong>${percentageChange.toFixed(2)}%</strong></p>`;
        } else if (newPrice < oldPrice) {
            message += `<p class="decrease">O preço <strong>DIMINUIU</strong>!</p>`;
            message += `<p>Diminuição de: <strong>R$ ${Math.abs(changeAmount).toFixed(2)}</strong></p>`;
            message += `<p>Variação para baixo: <strong>${Math.abs(percentageChange).toFixed(2)}%</strong></p>`;
        } else {
            message += `<p class="no-change">O preço <strong>NÃO MUDOU</strong>.</p>`;
        }

        resultDiv.innerHTML = message;
    });
});