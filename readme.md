# Battleship Game

Battleship game is a war game played on ocean by two players. Each player own his
battle area and each player will get same number of ships where each ship may have
different size placed at some position in non-overlapping fashion. Note, players cannot
see each others ship's location.
The player who destroys all the ships of other player is winner of the game. If at the end none of the player wins then both player declares peace.


# Concepts!

  - Think of the ships as assets on a canvas, (each cell on canvas will be worth 2 credits if type Q, 1 credit if type P)
  - If opponent's attack matches your canvas cell location, you lose 1 credit.
  - You got to fire till you have missiles/attacks (ammunition).
  - Opponent got to fire if you miss or are out of missiles.
  - You got extra round if you hit opponent's cell in the canvas.
  - Break the loop if there's a result to the war or if both players are out of missiles.

### How to run?

This project requires [Node.js](https://nodejs.org/) LTS to run.

Provide input by placing the text in `./input/file.txt`
```sh
$ npm install
$ npm run battleship
```

For running [tests](https://facebook.github.io/jest/)
```sh
$ npm test
```