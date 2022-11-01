class Shape {
    constructor(name) {
        this.name = name;
    }    
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI*this.radius*this.radius;
    }
}

class Line extends Shape {
    constructor(name, pointA, pointB) {
        super(name);
        this.pointA = pointA;
        this.pointB = pointB;
    }

    // calculateArea() {
    //     return Math.sqrt( Math.pow( (this.pointB.x - this.pointA.x) , 2) + Math.pow( (this.pointB.y - this.pointA.y) , 2) )
    // }
}


function shapesStats(shapes) {
    console.log("Shape stats: ");
    for(let shape of shapes) {
        if(shape.calculateArea) {
            console.log(`${shape.name} has area of ${shape.calculateArea()}cm^2`);
        }
    }
}


let shapes = [
    new Circle("Circle A", 2),
    new Circle("Circle B", 4),
    new Circle("Circle C", 5),
    new Line("Line A", { x: 1, y: 1 }, { x: 6, y: 7 })
];
shapesStats(shapes); 
