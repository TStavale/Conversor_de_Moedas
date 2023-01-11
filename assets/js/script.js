const button = document.getElementById ('convert-button');

const dolar = 5.2;

const convertValue = () => {
    const inputreais = document.getElementById('input-real').value;

    console.log(inputreais / dolar)
};

button.addEventListener('click', convertValue);