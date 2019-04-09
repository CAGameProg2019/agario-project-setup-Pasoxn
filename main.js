let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth -5;
canvas.height = window.innerHeight-5;

let mpos; //mouse position
let player; //position of circle

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
    mpos = new Vector(canvas.width/2, canvas.height/2);
    player = new Player (undefined, undefined, 50, randomColor());

    for (let i = 0; i <= 500; i++) {
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

    for (let i = 0; i < foods.length; i++) {
        foods[i].draw(c);
        }

    player.x = mpos.x;
    player.y = mpos.y;
    player.draw(c);

    requestAnimationFrame(update);
}


window.addEventListener('load', function () {
    init();

    window.addEventListener('mousemove', function(event){
        // console.log(event.clientX, event.clientY);
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
        mpos.print();

    });


});

//shift alt f is the shortcut for formating 
