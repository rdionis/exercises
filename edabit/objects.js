"use strict";

function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}
console.log(volumeOfBox({
    width: 2,
    length: 5,
    height: 1
}));
console.log(volumeOfBox({
    width: 4,
    length: 2,
    height: 2
}));
console.log(volumeOfBox({
    width: 2,
    length: 3,
    height: 5
}));


function cityFacts(city) {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}));

console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}));


function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
// this property we don't need and if, else bc it gives us a boolean answer.

console.log(hasKey({
    a: 44,
    b: 45,
    c: 46
}, "d"));

console.log(hasKey({
    craves: true,
    midnight: true,
    snack: true
}, "morning"));

console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));


function profit(info) {
	let answer = Math.round(info.inventory * info.sellPrice - info.inventory * info.costPrice);
	return answer;
}

console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
  }));

console.log(profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
  }));

console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
  }));