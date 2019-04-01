let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

function init() {
    // alert("hello world!");
    console.log(vector.toString);
    update();
}

function update() {

    requestAnimationFrame(update);
}

window.addEventListener('load', function (event) {
    init();
});

//shift alt f is the shortcut for formating 