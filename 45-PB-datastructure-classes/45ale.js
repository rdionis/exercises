"use strict";

// Q1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    describe = function () {
        return `${this.name}, ${this.age} years old.`;
    }
}
const ale = new Person("alejandra", 19);
console.log(ale.describe());



// Q2.
class Cylinder {
    constructor(radius, height) { // values inside the constructor are ones that are changing/dynamic
        this.radius = radius;
        this.height = height;
        this.volume = Number.parseFloat((Math.PI * Math.pow(radius, 2) * height).toFixed(4));
    }

}
console.log(new Cylinder(12, 14));
const cylinder = new Cylinder(12, 14);
console.log(cylinder.volume);



// Q3.
// class Clock {
//     constructor ()
// }

// Q4.
class TV {
    constructor(brand, channel, volume) {
        this.brand = "LG";
        this.channel = 1;
        this.volume = 50;
    }
    volumeUp = function () {
        if (this.volume === 100) {
            console.log("Max Volume")
        } else {
            this.volume += 1;
            console.log("Volume Up", this.volume);
        }
    }
    volumeDown = function () {
        if (this.volume === 0) {
            return "Min Volume";
        } else {
            this.volume -= 1;
            console.log("Volume Down", this.volume);
        }
    }
    channelMethod = function () {
        return Math.ceil(Math.random() * 50);
    }
    resetMethod = function () {
        return `Your TV will reset to channel ${this.channel} and to volume ${this.volume}`
    }
}
const Panasonic = new TV;
// console.log(new TV(Panasonic));
// console.log(Panasonic.volumeMethod());
console.log(Panasonic.channelMethod());
console.log(Panasonic.resetMethod());
console.log(Panasonic.volumeDown());
console.log(Panasonic.volumeUp());