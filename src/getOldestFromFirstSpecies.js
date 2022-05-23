const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const specie = employees.find(({ id: employeeId }) => employeeId === id).responsibleFor[0];
  const oldestAnimal = species.find(({ id: animalId }) => animalId === specie).residents
    .reduce((acc, resident) => (acc.age > resident.age ? acc : resident), 0);
  return Object.values(oldestAnimal);
};

module.exports = getOldestFromFirstSpecies;
