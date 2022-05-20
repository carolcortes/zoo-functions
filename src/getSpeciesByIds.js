const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return ([]);
  return ids.map((animalId) => data.species.find(({ id }) => (animalId === id)));
}

console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
  '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
