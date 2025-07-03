const genButton = document.querySelector("#gen-button");
const colors = document.querySelector(".colors");

function generateColors() {
    colors.innerHTML = "";

    for (let index = 0; index < 5; index++) {
        setColors();
    }
}

function generateColor() {
    const options = "0123456789ABCDEF";
    let hex = "#";

    for (let index = 0; index < 6; index++) {
        hex += options[Math.floor(Math.random() * 16)];
    }

    return hex;
}

function setColors() {
    let selectedColor = generateColor();
    const colorShow = document.createElement("div");
    colorShow.style.backgroundColor = selectedColor;
    const colorShowText = document.createElement("p");
    colorShowText.style.color = selectedColor;
    colorShowText.textContent = selectedColor;
    colorShow.appendChild(colorShowText);
    colors.appendChild(colorShow);
}

genButton.addEventListener("click", () => generateColors());