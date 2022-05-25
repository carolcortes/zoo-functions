const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const openingHours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it('caso não sejam passado argumentos, retorna retorna um objeto com os horários do zoológico', () => {
    expect(getOpeningHours()).toEqual(openingHours);
  });

  it('retorna que o zoológico está aberto nos horários disponíveis', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  const expectClosed = 'The zoo is closed';
  it('retorna que o zoológico está fechado nos horários indisponíveis', () => {
    expect(getOpeningHours('Tuesday', '07:00-PM')).toBe(expectClosed);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expectClosed);
  });

  it('a função não diferencia letras maiúsculas e minúsculas', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe(getOpeningHours('wednesday', '09:00-am'));
  });

  it('dispara um erro se o dia da semana não for informado corretamente', () => {
    expect(() => getOpeningHours('Segunda-feira', '09:00-AM')).toThrow(Error);
  });

  it('dispara um erro se o horário não for informado formato XX:XX-AM ou XX:XX-PM', () => {
    expect(() => getOpeningHours('Monday', '12 am')).toThrow(Error);
    expect(() => getOpeningHours('Monday', '23:00')).toThrow(Error);
    expect(() => getOpeningHours('Monday', '23:00-PM')).toThrow(Error);
    expect(() => getOpeningHours('Monday', '12:60-PM')).toThrow(Error);
  });
});
