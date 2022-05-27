const { species } = require('../data/zoo_data');

const getName = ({ name }) => name;
const matchesSex = (sex) => ({ sex: animal }) => sex === animal;
const getResidentsName = (residents) => residents.map(getName);
const getResidentsBySex = (sex, residents) => residents.filter(matchesSex(sex));

const handleOptions = ({ sorted, sex, residents }) => {
  if (!sorted && !sex) return getResidentsName(residents);
  if (!sorted) return getResidentsBySex(sex, residents).map(getName);
  if (!sex) return getResidentsName(residents).sort();
  return getResidentsBySex(sex, residents).map(getName).sort();
};

const createMap = ({ includeNames, sorted, sex }) => species.reduce((acc,
  { location, name, residents }) => ({ ...acc,
  [location]: [...(acc[location] || []), (!includeNames
    ? name : { [name]: handleOptions({ sorted, sex, residents }) })] }), {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return createMap();
  const { includeNames, sorted, sex } = options;
  return createMap({ includeNames, sorted, sex });
};

// referência: https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6
// Agradecimento especial ao colega de tribo e (super) amigo Renan :)
// Metade de um code-review por Matheus Inácio :)

module.exports = getAnimalMap;
