function isLandscape(width, height) {
    return width > height ? "Paisagem" : "Retrato";
}

let result = isLandscape(50, 100);

console.log(result);