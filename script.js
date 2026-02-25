const container = document.querySelector('img');

const images = ['/img/img_1.jpeg', '/img/img_2.jpeg', '/img/img_3.jpeg', '/img/img_4.jpeg', '/img/img_5.jpeg', '/img/img_6.jpeg', '/img/img_7.jpeg', '/img/img_8.jpeg', '/img/img_9.jpeg'];

container.src = images[Math.trunc(Math.random() * images.length)];