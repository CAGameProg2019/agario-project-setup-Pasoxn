class Vector {
    
    constructor(x,y) {
        this.x = x;
        this.y = y;

    }

    addVector(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    subVector(vec){
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    scale (s){
        s = subVector(vec)*s;
    }
    toString(){
        return '(' + this.x + ',' + this.y + ')'
    }

    print(){
        console.log(this.toString());
    }
}