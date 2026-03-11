const imageContainer = document.querySelector('img');
const dotsContainer = document.querySelector('.dots');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let arrDots = [];

const images = ["./images/img_1.jpeg", "./images/img_2.jpeg", "./images/img_3.jpeg", "./images/img_4.jpeg", "./images/img_5.jpeg", "./images/img_6.jpeg"];

let currentImage = 0;

function renderImage() {
    imageContainer.src = images[currentImage];
}

function renderDots() {
    let dots = '';
    for(let i = 0; i < images.length; i++) {
        const div = `<div class="dot" data-index="${i}"></div>`
        dots += div
    }
    dotsContainer.innerHTML = dots;

    arrDots = Array.from(dotsContainer.children);
}

function renderPrev() {
    if (currentImage <= 0) {
        prev.style.visibility = 'hidden';
        return
    }
    currentImage--;
    if (currentImage <= 0) {
        prev.style.visibility = 'hidden';
    }
    next.style.visibility = 'visible';
    activeDot(currentImage);
    renderImage();
}

function renderNext() {
    if (currentImage >= images.length - 1) {
        next.style.visibility = 'hidden';
        return
    }
    prev.style.visibility = 'visible';
    currentImage++;
    if (currentImage >= images.length - 1) {
        next.style.visibility = 'hidden';
    }
    activeDot(currentImage);
    renderImage();
}

function activeDot(index = 0) {
    arrDots.forEach(child => {
        if (+child.dataset.index === index) {
            child.classList.add('active-dot');
        } else {
            child.classList.remove('active-dot');
        }
    })
}

dotsContainer.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    currentImage = +index;
    activeDot(currentImage)
    renderImage()
});

prev.addEventListener("click", renderPrev)
next.addEventListener("click", renderNext)

function init() {
    renderPrev()
    renderImage()
    renderDots()
    activeDot()
}

init()