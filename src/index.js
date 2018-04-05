const Player = require('./player');
const { prepareShipCanvas, isThereAWar } = require('./utils/war');
const { readInput } = require('./utils/helper');

let result = false;
const player1 = new Player('Player-1');
const player2 = new Player('Player-2');

// read the input
const input = readInput();
const numberOfShips = parseInt(input[1]);
player1.attacks = input[numberOfShips + 2].split(' ');
player2.attacks = input[numberOfShips + 3].split(' ');

// prepare canvas having ships for both players.
for (let i = 0; i < numberOfShips; i++) {
    const shipSpecs = input[i+2];
    const [type, width, height, p1ShipLocation, p2ShipLocation] = shipSpecs.split(' ');
    prepareShipCanvas(player1, p1ShipLocation, type, height, width);
    prepareShipCanvas(player2, p2ShipLocation, type, height, width);
}

function fire(player, opponent) {
    if (result) return; // if some player has won, return.
    if (!isThereAWar(player1, player2)) { // no missiles means no war.
        console.log('Peace declared');
        return;
    }
    const attack = player.attacks.shift();
    if (!attack) {
        console.log(`${player.name} no more missiles left to launch`);
        fire(opponent, player); // opponent gets the turn.
        return;
    }
    // if the opponent's canvas match your attack, then they lose credits.
    const part = opponent.canvas.find(item => item.code === attack && item.credits > 0);
    if (part) {
        part.credits -= 1;
        console.log(`${player.name} fires a missile with target ${attack} which got hit`);
        if (!opponent.hasGotCredits()) {
            console.log(`${player.name} won the battle`);
            result = true;
        } else {
            fire(player, opponent); // player gets another turn on a hit.
        }
    } else {
        console.log(`${player.name} fires a missile with target ${attack} which got miss`);
        fire(opponent, player); // opponent gets a chance on miss.
    }
}

// Player1 gets to open the fire first.
fire(player1, player2);