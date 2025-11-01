interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = { id: 1, name: "Alex" };

type ID = string | number;

type point = {
  x: number;
  y: number;
};

function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => `Hello, ${name}`;

interface mathOperation {
  (a: number, b: number): number;
}

const multiply: mathOperation = (a, b) => a * b;

// Practice

type Year = number;

interface Car {
  brand: string;
  year: Year;
  getAge(): number;
}

const car1: Car = {
  brand: "Toyota",
  year: 2018,
  getAge() {
    return new Date().getFullYear() - this.year;
  },
};

const car2: Car = {
  brand: "Honda",
  year: 2020,
  getAge() {
    return new Date().getFullYear() - this.year;
  },
};

function compareAge(carA: Car, carB: Car): void {
  const ageA = carA.getAge();
  const ageB = carB.getAge();

  if (ageA > ageB) {
    console.log(`${carA.brand} is older than ${carB.brand}`);
  } else if (ageA < ageB) {
    console.log(`${carB.brand} is older than ${carA.brand}`);
  } else {
    console.log(`${carA.brand} and ${carB.brand} are the same age`);
  }
}

compareAge(car1, car2);
