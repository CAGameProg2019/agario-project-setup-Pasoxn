let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function init() {
    // alert("hello world!");

    update();
}

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    vec.addVector(vel);

    c.beginPath();
    c.arc(vec.x, vec.y, 50, 0, Math.PI * 2, false);
    c.closePath();
    c.stroke();

    requestAnimationFrame(update);
}

let vec = new Vector(5, 7);
let vel = new Vector(1, 1);
vel.scale(2);
vel.print(); // <2, 2>
vec.addVector(vel);
vec.print();  // <3, 5>

window.addEventListener('load', function (event) {
    init();
});

//shift alt f is the shortcut for formating 