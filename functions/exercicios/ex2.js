const circle = {
    radius: 50,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);
console.log(circle.radius);
console.log(circle);

let array = [1, 3, 4];
