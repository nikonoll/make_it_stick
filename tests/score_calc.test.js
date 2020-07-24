const scoreCalc = require('../lib/score_calc')

describe('score delta', () => {
  test('gives back delta of +10 when answer ok', () => {
    expect(scoreCalc.scoreDelta("ok")).toBe(10);
  });

  test('gives back delta of +20 when answer easy', () => {
    expect(scoreCalc.scoreDelta("easy")).toBe(20);
  });

  test('gives back delta of -20 when answer hard', () => {
    expect(scoreCalc.scoreDelta("hard")).toBe(-20);
  });

  test('gives back delta of 0 when answer is not given or not easy/ok/hard', () => {
    expect(scoreCalc.scoreDelta(" ")).toBe(0);
  });
})

describe('boundaries', () => {
  test('stops score to go over 100', () => {
    expect(scoreCalc.boundaries(10, 100)).toBe(100);
  });

  test('stops score to go under 0', () => {
    expect(scoreCalc.boundaries(-20, 10)).toBe(0);
  });
})

describe('newScore', () => {
  test('returns a new score', () => {
    expect(scoreCalc.newScore(50, "hard")).toBe(30);
  });
  test('does not return negative', () => {
    expect(scoreCalc.newScore(0, "hard")).toBe(0);
  });
  test('returns decayed score', () => {
    let d = new Date();
    d.setDate(d.getDate() - 5);
    expect(scoreCalc.newScore(50, "hard", d)).toBe(5);
  });

})

describe('decaying function', () => {
  test('returns reduced score', () => {
    let d = new Date();
    d.setDate(d.getDate() - 5);
    expect(scoreCalc.decay(20, d)).toBe(-5);
  });
  test('keeps same score if learned same day', () => {
    let d = new Date();
    d.setHours(d.getHours() - 5);
    expect(scoreCalc.decay(0, d)).toBe(0);
  });
})
