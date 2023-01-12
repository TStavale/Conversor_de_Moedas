const button = document.getElementById ('convert-button');
const select = document.getElementById ('currency-select');

const dolar = 5.2;
const euro = 5.9;


const convertValue = () => {
    const inputreais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

    
    realValueText.innerHTML = new Intl.NumberFormat('pt-Br',
        { style: 'currency', currency: 'BRL'}
    ). format(inputreais);

    if(select.value === 'U$$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-Us',
            { style: 'currency', currency: 'USD'}
        ). format(inputreais / dolar);
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR'}
        ). format(inputreais / euro);
    }

};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-img');

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.png"
    }

    if (select.value === 'U$$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/img/eua.png"
    }

    convertValue()

};

button.addEventListener('click', convertValue);
select.addEventListener('change', changeCurrency);