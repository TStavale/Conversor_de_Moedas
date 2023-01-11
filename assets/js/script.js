const button = document.getElementById ('convert-button');

const dolar = 5.2;

const convertValue = () => {
    const inputreais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

    realValueText.innerHTML = inputreais;
    
    realValueText.innerHTML = new Intl.NumberFormat('pt-Br',
        { style: 'currency', currency: 'BRL'}
    ). format(inputreais)

    currencyValueText.innerHTML = new Intl.NumberFormat('en-Us',
        { style: 'currency', currency: 'USD'}
    ). format(inputreais / dolar)
    
};

button.addEventListener('click', convertValue);