const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);

for(let i = 1; i <= 3; i++) {
    const button = document.createElement('button');
    button.textContent = `Button ${i}`;
    button.dataset.value = `${i}`
    div.appendChild(button);
}

div.addEventListener('click', (e) => {
    const value = e.target.dataset.value;
    alert(`Clicked button: ${value}`);
})