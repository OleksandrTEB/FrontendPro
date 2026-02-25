// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

const btn = document.querySelector('.btn');
const container = document.querySelector('div');

btn.addEventListener('click', () => {
    container.classList.toggle('active');
})