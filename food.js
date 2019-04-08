class Food extends Vector {

    //#4286f4
    constructor(x, y, radius, color) {
        super(x, y); //calls constructor from the parent class (vector)
        this.radius = radius;
        this.color = color;
    }

    draw(c) {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.closePath();

        c.fill();
    }

}

Object.assign(Food, Vector); //access to the entire class 