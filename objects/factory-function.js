function createCircle(radius) {
    let circle = {
        radius,
        draw() {
            console.log('Draw')    
        }
    };
    return circle;
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(5);
console.log(circle2);