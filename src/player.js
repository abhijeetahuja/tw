class Player {
    constructor(name) {
        this.name = name;
        this.canvas = [];
        this.attacks = [];
    }

    // canvas is player's asset which opponent will try to destroy.
    fillCanvas(canvas) {
        this.canvas.push(canvas);
    }

    // no credits means no more ship canvas to be destroyed.
    // game over mate!!
    hasGotCredits() {
        return this.canvas.find(item => item.credits > 0);
    }
}

module.exports = Player;