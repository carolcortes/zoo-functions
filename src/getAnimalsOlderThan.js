const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find(({ name }) => (name === animal)).residents
    .every(({ age: animalAge }) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
