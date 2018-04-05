const { nextChar } = require('./helper');

const prepareShipCanvas = (player, shipLocation, shipType, height, width) => {
    let [char, num] = shipLocation;
    for (let h = 1; h <= parseInt(height); h ++) {
        for (let w = 0; w < parseInt(width); w ++) {
            player.fillCanvas({
                credits: shipType === 'Q' ? 2 : 1, // type Q has got 2 credits.
                code: `${char}${parseInt(num)+w}`
            });
        }
        char = nextChar(char);
    }
};

// no missiles/attacks means there is no war!!
const isThereAWar = (player1, player2) => player1.attacks.length || player2.attacks.length;

module.exports = {
    prepareShipCanvas,
    isThereAWar,
};