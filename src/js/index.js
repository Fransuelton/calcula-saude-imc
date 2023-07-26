const inputs = document.querySelectorAll("input")
console.log(inputs)

const changeThemeBtn = inputs[0]

changeThemeBtn.addEventListener("click", () => {
    const header = document.querySelector("header")

    if (header.classList.contains("dark-mode")) {
        header.classList.remove("dark-mode")
    } else {
        header.classList.add("dark-mode")
    }

    const mainContainer = document.querySelector(".container")

    if (mainContainer.classList.contains("dark-mode")) {
        mainContainer.classList.remove("dark-mode")
        mainContainer.classList.remove("dark-letter")
    } else {
        mainContainer.classList.add("dark-mode")
        mainContainer.classList.add("dark-letter")
    }

    const footer = document.querySelector("footer")

    if (footer.classList.contains("dark-footer")) {
        footer.classList.remove("dark-footer")
    } else {
        footer.classList.add("dark-footer")
    }
})


const modal = document.getElementById('modal');

function showModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

// Mostrar o Popup Modal quando a página for carregada
window.onload = function() {
  showModal();
};