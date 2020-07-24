const queue = require('../lib/queue')

describe('next card function', () => {
  test('gives back a card element from the db', () => {
    expect(queue.nextCard(1)).toStrictEqual([2,1]);
  });
})
