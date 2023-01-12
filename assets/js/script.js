const button = document.getElementById ('convert-button');
const select = document.getElementById ('currency-select');

const dolar = 5.16;
const euro = 5.55;
const BTC = 94196.67;


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

    if (select.value === 'Ƀ Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC'}
        ). format(inputreais / BTC);
    }

};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-img'); 
    const currencyBackground = document.querySelector('body');

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.png"
        currencyBackground.style.backgroundImage = "url(./assets/img/euro_background.jpg)"
    }

    if (select.value === 'U$$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/img/eua.png"
        currencyBackground.style.backgroundImage = "url(./assets/img/dolar_background.jpg)"
    }

    if (select.value === 'Ƀ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/img/btc.png"
        currencyBackground.style.backgroundImage = "url(./assets/img/btc_background.jpg)"
    }

    convertValue()

};

button.addEventListener('click', convertValue);
select.addEventListener('change', changeCurrency);