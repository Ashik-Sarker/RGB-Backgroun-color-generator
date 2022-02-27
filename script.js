
document.getElementById('button').addEventListener('click', () => {
    const body = document.getElementById('bg-color');
    body.style.backgroundColor = randomBGColor();
})

const randomBGColor = () => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}