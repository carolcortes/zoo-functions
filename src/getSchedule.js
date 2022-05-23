const { species, hours } = require('../data/zoo_data');

const daySchedule = (day) => {
  const { open, close } = hours[day];
  const animalDay = [];
  const schedule = { officeHour: `Open from ${open}am until ${close}pm`, exhibition: animalDay };
  species.forEach(({ name, availability }) => {
    if (availability.includes(day)) {
      animalDay.push(name);
    } else if (open === 0 && close === 0 && !availability.includes(day)) {
      schedule.officeHour = 'CLOSED';
      schedule.exhibition = 'The zoo will be closed!';
    }
  });
  return schedule;
};

const zooSchedule = () => {
  const days = Object.keys(hours);
  const schedule = {};
  days.forEach((day) => {
    schedule[day] = daySchedule(day);
  });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const animal = species.find(({ name }) => scheduleTarget === name);
  const schedule = zooSchedule();
  if (Object.keys(hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  if (!scheduleTarget || !animal) return schedule;
  return animal.availability;
};

module.exports = getSchedule;
