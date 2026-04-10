function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

function addition(a, b) {
    return a - b; // BUG
}

console.log("Addition:", addition(5, 3));
console.log("Multiplication:", multiplication(5, 3));