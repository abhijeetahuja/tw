const { prepareShipCanvas } = require('../../src/utils/war');
const Player = require('../../src/player');

const player = new Player('JessicaJones');

test('Prepare ship canvas', () => {
    prepareShipCanvas(player, 'A3', 'Q', 2, 2);
    console.log(player.canvas);
    expect(player.canvas).toEqual([{"code": "A3", "credits": 2}, {"code": "A4", "credits": 2}, {"code": "B3", "credits": 2}, {"code": "B4", "credits": 2}]);
});