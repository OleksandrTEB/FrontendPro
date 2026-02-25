const container = document.querySelector('.box');

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        let sum = i * j
        if(sum !== 1 && sum !== 100) {
            if(sum % 10 === 0 && i === 10 || j === 10) {
                sum /= 10;
            }
            const div = document.createElement('div');
            if(sum === 1) {
                div.className = 'hide';
            } else {
                div.className = 'item';
                div.textContent = String(sum);
            }
            container.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.className = 'hide';
            container.appendChild(div);
        }
    }
}