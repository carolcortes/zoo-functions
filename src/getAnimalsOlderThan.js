const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find(({ name }) => (name === animal)).residents
  .every(({ age: animalAge }) => animalAge >= age);

module.exports = getAnimalsOlderThan;
