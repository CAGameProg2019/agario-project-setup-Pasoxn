let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let foods = []; //if created in init, it could only be used in init

let colors = [
    '#CFCFCF',
    '#DFDFDF',
    '#EFEFEF',
    '#4286f4',
    '#BFBFBF',
    '#AFAFAF', 
    '#9F9F9F', 
    '#8F8F8F', 
    '#7F7F7F', 
    '#6F6F6F', 
    '#5F5F5F', 
    '#4F4F4F', 
    '#3F3F3F', 
    '#2F2F2F', 
    '#1F1F1F', 
    '#0F0F0F', 
    '#000000', 
]

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {
    for (i = 0; i <= 500; i++) {
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
    for (i = 0; i <= 500; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();

        foods.push(new Food(x, y, 20, color));
        foods[i].draw(c);
        }


    requestAnimationFrame(update);
}


window.addEventListener('load', function (event) {
    init();
});

//shift alt f is the shortcut for formating 
