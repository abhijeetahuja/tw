const Player = require('../src/player');

const player1 = new Player('DareDevil');

test('Player to have a name', () => {
    expect(player1.name).toBe('DareDevil');
});