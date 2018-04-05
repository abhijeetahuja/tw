const { nextChar } = require('../../src/utils/helper');

test('Should give next char', () => {
    expect(nextChar('A')).toEqual('B');
});