const inputs = document.querySelectorAll("form input")
const resultCard = document.querySelector('.result-card')
const card = document.querySelector(".card")
const form = document.querySelector('.form')
const submitBtn = document.querySelector('.submit-button')
const infoText = document.querySelector('.info-text')
console.log(infoText)

submitBtn.addEventListener("click", () => {
    const weight = inputs[3].value
    const height = inputs[4].value
    const resultText = document.querySelector("#imc-value")
    const imc = weight / (height * height)

    if (weight == 0 && height == 0) {
        event.preventDefault()
    } else {
        form.classList.remove('show')
        form.classList.add('hidden')
        resultCard.classList.remove('hidden')
        resultCard.classList.add('show')
    }

    const imcRanges = [
        { max: 17, message: 'Você está muito abaixo do peso.' },
        { max: 18.5, message: 'Você está abaixo do peso.' },
        { max: 25, message: 'Você está no peso ideal.' },
        { max: 30, message: 'Você está em sobrepeso.' },
        { max: 35, message: 'Você está em obesidade.' },
        { max: 40, message: 'Você está em obesidade severa.' },
        { max: Infinity, message: 'Você está em obesidade mórbida.' },
    ];

    for (const range of imcRanges) {
        if (imc <= range.max) {
            message = `${imc.toFixed(1)} ${range.message}`;
            break;
        }
    }

    resultText.innerHTML = message;
})

const changeThemeBtn = document.querySelector('#switch')

changeThemeBtn.addEventListener("click", () => {
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    const body = document.querySelector("body")

    if (body, header, footer.classList.contains('dark-mode' && 'dark-section')) {
        body.classList.remove('dark-mode')
        header.classList.remove('dark-mode')
        footer.classList.remove('dark-section')
        card.classList.remove('dark-section')
    } else {
        body.classList.add('dark-mode')
        header.classList.add('dark-mode')
        footer.classList.add('dark-section')
        card.classList.add('dark-section')
    }
})

const returnBtn = document.querySelector('.return-btn')

returnBtn.addEventListener('click', () => {

    form.classList.add('show')
    form.classList.remove('hidden')
    resultCard.classList.add('hidden')
    resultCard.classList.remove('show')
})

const modal = document.getElementById('modal');

function showModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function showWelcomeModal() {
    const modalShown = sessionStorage.getItem('modalShown');

    if (!modalShown) {
        showModal();
        sessionStorage.setItem('modalShown', 'true');
    }
}

window.onload = function () {
    showWelcomeModal();
};