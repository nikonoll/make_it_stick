const scoreCalc = require('../lib/score_calc')

describe('wip', () => {
  test('gives back delta of +10 when answer ok', () => {
    expect(scoreCalc.scoreDelta("ok")).toBe(10);
  });
})

