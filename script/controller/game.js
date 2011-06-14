define(["model/fruit-machine", "model/player"], function (FruitMachine, Player) {
    var Game = function () {
        this.fm     = new FruitMachine();
        this.player = new Player();
    };
    Game.prototype.insertCredit = function () {
        this.player.addCredits(1);
    };
    Game.prototype.credits = function () {
        return this.player.credits;
    };
    Game.prototype.score = function () {
        return {
            isWinner    : this.fm.isWinner(),
            result      : this.fm.result,
            previous    : this.fm.previous,
            next        : this.fm.next
        };
    };
    Game.prototype.play  = function () {
        if (this.player.credits > 0) {
            this.player.useCredits(1);
            this.fm.spin();
        }
    };
    Game.prototype.init  = function () {
        this.fm.spin();
        var initialResult = this.score();
        initialResult.isWinner = false;
        return initialResult;
    };

    return Game;
});