function Transport() {
    this.engine = false;
    this.engineCheck = function() {
        if(this.engine) {
            this.engine = false;
            return `Двигатель остановлен`;
        } else {
            this.engine = true;
            return `Двигатель запущен`;
        };
    };

    this.speed = 0;
    this.maxSpeed = 100;

    this.transmissionPosition = 0;
    this.upTransmission = function() {
        if(this.engine == true && this.transmissionPosition < 5) {
            if(this.speed > 600 && this.takeoff == true) {
                console.log(`Взлет!`);
            };

            this.speed += (this.maxSpeed / 5);
            return `${++this.transmissionPosition} скорость : ${this.speed} км/ч`;
        } else {
            return `Максимальная скорость!`;
        }
    };

    this.downTransmission = function() {
        if(this.engine == true && this.transmissionPosition > 0) {
            if(this.speed < 300 && this.takeoff == true) {
                console.log(`Посадка!`);
            };
            this.speed -= (this.maxSpeed / 5);
            return `${--this.transmissionPosition} скорость : ${this.speed} км/ч`;
        } else {
            if(this.engine == true) {
                return `${this.transmissionPosition} скорость - ниже нельзя`;
            } else {
                return `Запустите двигатель!`;
            }
            
        }
    };
};

function Car() {
    Transport.apply(this);

    this.wheels = 4;
    this.weight = 1,5;
    this.passengerSeats = 4;
    this.maxSpeed = 200;
};

function Airplane() {
    Transport.apply(this);

    this.wheels = 6;
    this.weight = 150;
    this.passengerSeats = 400;
    this.maxSpeed = 1000;
    this.speed = 0;

    this.takeoff = true;
};

function Ship() {
    Transport.apply(this);

    this.wheels = 0;
    this.weight = 20236;
    this.passengerSeats = 6500;
    this.maxSpeed = 50;
};

let car = new Car();
let air = new Airplane();
let shp = new Ship();

console.log(`Машина----------------------------------------`);
console.log(car.engineCheck());
console.log(`${car.maxSpeed} максимальная скорость транспортного средства`);
console.log(`скорость ${car.speed} км/ч`);
console.log(`${car.upTransmission()}`);
console.log(`${car.upTransmission()}`);
console.log(`${car.upTransmission()}`);
console.log(`${car.upTransmission()}`);
console.log(`${car.upTransmission()}`);
console.log(`${car.upTransmission()}`);
console.log(`${car.downTransmission()}`);
console.log(`${car.downTransmission()}`);
console.log(`${car.downTransmission()}`);
console.log(`${car.downTransmission()}`);
console.log(`${car.downTransmission()}`);
console.log(`${car.downTransmission()}`);
console.log(car.engineCheck());
console.log(`${car.downTransmission()}`);

console.log(``);
console.log(``);

console.log(`Самолет----------------------------------------`);
console.log(air.engineCheck());
console.log(`${air.maxSpeed} максимальная скорость транспортного средства`);
console.log(`скорость ${air.speed} км/ч`);
console.log(`${air.upTransmission()}`);
console.log(`${air.upTransmission()}`);
console.log(`${air.upTransmission()}`);
console.log(`${air.upTransmission()}`);
console.log(`${air.upTransmission()}`);
console.log(`${air.upTransmission()}`);
console.log(`${air.downTransmission()}`);
console.log(`${air.downTransmission()}`);
console.log(`${air.downTransmission()}`);
console.log(`${air.downTransmission()}`);
console.log(`${air.downTransmission()}`);
console.log(`${air.downTransmission()}`);
console.log(air.engineCheck());
console.log(`${air.downTransmission()}`);

alert(`смотри консоль`);