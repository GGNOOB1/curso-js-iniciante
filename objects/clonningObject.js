function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    };
}

const circle = new Circle(1);
console.log(circle);

// Três maneiras de clonar objetos

/*

1° Maneira

const newCircle = {};

for (key in circle) {
  newCircle[key] = circle[key];
}*/

// 2° Maneira

/*
const newCircle = Object.assign(
  {
    color: "Red",
  },
  circle
);

console.log(newCircle);
newCircle.draw();
*/

// 3° Maneira

const newCircle = { ...circle };
console.log(newCircle);