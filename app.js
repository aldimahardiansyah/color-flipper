const btn = document.getElementById('btn');
const colors = ['#01a1f3', 'Green', 'Rgba(56,43,173)', 'Purple', '#f3f331'];
let randomNumber = 0;

btn.addEventListener('click', function () {
    randomNumber = getRandomAngka();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById('color').innerHTML = colors[randomNumber];
});

let getRandomAngka = function () {
    let random = Math.floor((Math.random() * colors.length) + 0);
    return random;
}

