// Function to update prices based on toggle
const updatePrices = () => {
    const isChecked = document.getElementById('price-toggle').checked;
    const cards = document.getElementsByClassName('amount');

    Array.from(cards).forEach(card => {
        const monthlyPrice = card.getAttribute('data-monthly');
        const annualPrice = card.getAttribute('data-annual');

        // Set the price based on the toggle state
        card.textContent = isChecked ? monthlyPrice : annualPrice;
    });
};

// Add event listener to the checkbox
document.getElementById('price-toggle').addEventListener('change', updatePrices);

updatePrices();