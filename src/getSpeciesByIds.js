const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((animalId) => species
  .find(({ id }) => (animalId === id)));

module.exports = getSpeciesByIds;
