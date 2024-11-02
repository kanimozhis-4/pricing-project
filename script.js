const updatePrices = () => {
    const isChecked = document.getElementById('price-toggle').checked;
    const cards = document.getElementsByClassName('amount');

    Array.from(cards).forEach(card => {
        const monthlyPrice = card.getAttribute('data-monthly');
        const annualPrice = card.getAttribute('data-annual');

        card.textContent = isChecked ? monthlyPrice : annualPrice;
    });
};

document.getElementById('price-toggle').addEventListener('change', updatePrices);

updatePrices();