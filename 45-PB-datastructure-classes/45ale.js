"use strict";

// Q1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.describe = function () {
            return `${this.name}, ${this.age} years old.`;
        }
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




// Q3.
// class Clock {
//     constructor ()
// }

// Q4.
class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = "LG";
        this.channel = channel;
        this.volume = volume;
        this.volumeMethod = function () {

        }
        this.channelMethod = function () {

        }
        this.resetMethod = function () {
            
        }
    }
}