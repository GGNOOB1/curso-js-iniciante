function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    };
}

const circle = new Circle(1);

circle.draw();
