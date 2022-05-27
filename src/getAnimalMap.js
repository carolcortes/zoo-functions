const { species } = require('../data/zoo_data');

const getName = (residents) => residents.map(({ name }) => name);

const maleOrFemale = (sex, residents) => residents.filter(({ sex: animal }) => sex === animal)
  .map(({ name }) => name);

const getOptions = (sorted, sex, residents) => {
  if (!sorted && !sex) return getName(residents);
  if (!sorted) return maleOrFemale(sex, residents);
  if (!sex) return getName(residents).sort();
  return maleOrFemale(sex, residents).sort();
};

const animalInfo = (includeNames, sorted, sex) => species.reduce((acc,
  { location, name, residents }) => ({ ...acc,
  [location]: [...(acc[location] || []), (!includeNames
    ? name : { [name]: getOptions(sorted, sex, residents) })] }), {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return animalInfo();
  const { includeNames, sorted, sex } = options;
  return animalInfo(includeNames, sorted, sex);
};

module.exports = getAnimalMap;
