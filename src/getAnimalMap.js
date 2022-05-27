const { species } = require('../data/zoo_data');

const getResidentsName = (residents) => residents.map(({ name }) => name);

const getMaleOrFemale = (sex, residents) => residents.filter(({ sex: animal }) => sex === animal)
  .map(({ name }) => name);

const getOptions = (sorted, sex, residents) => {
  if (!sorted && !sex) return getResidentsName(residents);
  if (!sorted) return getMaleOrFemale(sex, residents);
  if (!sex) return getResidentsName(residents).sort();
  return getMaleOrFemale(sex, residents).sort();
};

const createMap = (includeNames, sorted, sex) => species.reduce((acc,
  { location, name, residents }) => ({ ...acc,
  [location]: [...(acc[location] || []), (!includeNames
    ? name : { [name]: getOptions(sorted, sex, residents) })] }), {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return createMap();
  const { includeNames, sorted, sex } = options;
  return createMap(includeNames, sorted, sex);
};

// referência: https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6
// Agradecimento especial ao colega de tribo e (super) amigo Renan :)

module.exports = getAnimalMap;
