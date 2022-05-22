const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter(({ age }) => age < 18).length,
  adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
  senior: entrants.filter(({ age }) => age >= 50).length,
});

const calculateEntry = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { child: countChild, adult: countAdult, senior: countSenior } = countEntrants(entrants);
  const { child, adult, senior } = data.prices;
  return child * countChild + adult * countAdult + senior * countSenior;
};

module.exports = { calculateEntry, countEntrants };
