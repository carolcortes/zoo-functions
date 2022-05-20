const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((animalId) => species.find(({ id }) => (animalId === id)));
}

module.exports = getSpeciesByIds;
