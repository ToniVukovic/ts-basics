"use strict";
const user = { id: 1, name: "Alex" };
function add(a, b) {
    return a + b;
}
const greet = (name) => `Hello, ${name}`;
const multiply = (a, b) => a * b;
const car1 = {
    brand: "Toyota",
    year: 2018,
    getAge() {
        return new Date().getFullYear() - this.year;
    },
};
const car2 = {
    brand: "Honda",
    year: 2020,
    getAge() {
        return new Date().getFullYear() - this.year;
    },
};
function compareAge(carA, carB) {
    const ageA = carA.getAge();
    const ageB = carB.getAge();
    if (ageA > ageB) {
        console.log(`${carA.brand} is older than ${carB.brand}`);
    }
    else if (ageA < ageB) {
        console.log(`${carB.brand} is older than ${carA.brand}`);
    }
    else {
        console.log(`${carA.brand} and ${carB.brand} are the same age`);
    }
}
compareAge(car1, car2);
