const { species } = require('../data/zoo_data');

const allAnimals = () => {
  const info = {};
  species.forEach(({ name, residents }) => {
    info[name] = residents.length;
  });
  return info;
};

const countAnimals = (animal) => {
  if (!animal) return allAnimals();
  if (!animal.sex) return species.find(({ name }) => name === animal.specie).residents.length;
  return species.find(({ name }) => name === animal.specie).residents
    .filter(({ sex }) => sex === animal.sex).length;
};

module.exports = countAnimals;
