let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let foods = []; //if created in init, it could only be used in init

let colors = [
    'blue',
    'green',
    'red',
    '#4286f4'
]

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {
    for (i = 0; i <= 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();

    // let food = new Food(x, y, 20, color);

        foods.push(new Food(x, y, 20, color));
    }
    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);
        
    for (i = 0; i < foods.length; i++) {
        foods[i].draw(c);
    }

    requestAnimationFrame(update);
}


window.addEventListener('load', function (event) {
    init();
});

//shift alt f is the shortcut for formating 

//something is wrong...
