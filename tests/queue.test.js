const queue = require('../lib/queue')

describe('queue', () => {
  test('gives back a good study order', () => {
    expect(queue.buildQueue([{cardId: 1, score: 20}, {cardId: 2, score: 10}])).toBe([2,1]);
  });
})

