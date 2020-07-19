const scoreDelta = require('../helper/score_calc');

test('gives back delta of +10 when answer ok', () => {
  expect(scoreDelta("ok")).toBe(10);
});

test('gives back delta of +20 when answer easy', () => {
  expect(scoreDelta("easy")).toBe(20);
});

test('gives back delta of -20 when answer hard', () => {
  expect(scoreDelta("hard")).toBe(-20);
});

test('gives back delta of 0 when answer is not given or not easy/ok/hard', () => {
  expect(scoreDelta("")).toBe(0);
});
