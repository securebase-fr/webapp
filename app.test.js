const calcul = require('./app');

test('additionne 1 + 2 et donne 3 (branche a <= 10)', () => {
  expect(calcul(1, 2)).toBe(3);
});

test('additionne 11 + 2 et donne 13 (branche a > 10)', () => {
  expect(calcul(11, 2)).toBe(13);
});

test('gère les nombres negatifs', () => {
  expect(calcul(-5, 3)).toBe(-2);
});
