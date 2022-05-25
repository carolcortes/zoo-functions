const { employees, species } = require('../data/zoo_data');

const findEmployee = (info) => employees.find(({ id, firstName, lastName }) =>
  info === id || info === firstName || info === lastName);

const getSpeciesInfo = ({ responsibleFor }, key) => species.filter(({ id }) => responsibleFor
  .includes(id)).map((animal) => animal[key]);

const employeesInfo = (person) => ({
  id: person.id,
  fullName: `${person.firstName} ${person.lastName}`,
  species: getSpeciesInfo(person, 'name'),
  locations: getSpeciesInfo(person, 'location'),
});

const getAllEmployees = () => employees.map((employee) => employeesInfo(employee));

const getEmployeesCoverage = (employee) => {
  if (!employee) return getAllEmployees();
  const searchInfo = findEmployee(Object.values(employee)[0]);
  if (!searchInfo) throw new Error('Informações inválidas');
  return employeesInfo(searchInfo);
};

module.exports = getEmployeesCoverage;
