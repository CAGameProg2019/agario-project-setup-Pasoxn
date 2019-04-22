let canvas = document.getElementById('main');
let c = canvas.getContext('2d');
const FOOD_COUNT = 500;

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

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
let strokeColors = [
    '#CBCBCB',
    '#DBDBDB',
    '#EBEBEB',
    '#4286B4',
    '#BBBBBB',
    '#ABABAB',
    '#9B9B9B',
    '#8B8B8B',
    '#7B7B7B',
    '#6B6B6B',
    '#5B5B5B',
    '#4B4B4B',
    '#3B3B3B',
    '#2B2B2B',
    '#1B1B1B',
    '#0B0B0B',
    '#000000',
]

function randomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateFood(){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();

    // let food = new Food(x, y, 20, color);
    foods.push(new Food(x, y, 10, color));

}


function init() {

    mpos = new Vector(canvas.width / 2, canvas.height / 2);

    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)]; //set the index calculated in the previous array and pass the index

    let name = prompt('enter name');

    player = new Player(mpos.x, mpos.y, 20, color, stroke, name, 4.5);

    for (let i = 0; i < FOOD_COUNT; i++) {
        generateFood();
    }
    update();
}


function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    player.update(mpos);

    for (let i = 0; i < foods.length; i++) {
        let eaten = player.intersects(foods[i]);
        if (!eaten) {
            foods[i].draw(c);
        } 
        else {
            // console.log('AAAAAAAAAAAAAAAAAAAA');
            player.addMass(foods[i].mass);
            foods.splice(i, 1);
            i--;
        }

    }

    while(foods.length < FOOD_COUNT){
        generateFood();
    }
    
    player.draw(c);

    requestAnimationFrame(update);
}


window.addEventListener('load', function () {
    init();

    window.addEventListener('mousemove', function (event) {
        // console.log(event.clientX, event.clientY);
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
        mpos.print();

    });


});

//shift alt f is the shortcut for formating 
