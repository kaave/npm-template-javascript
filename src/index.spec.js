const add = require('./');

describe('index', () => {
  it('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
