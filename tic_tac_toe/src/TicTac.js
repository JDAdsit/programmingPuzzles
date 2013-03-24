function TicTac() {
    var self = this;
    this.available;
    this.wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    this.playerOne;
    this.playerTwo;
    this.playerOneWin = false;
    this.playerTwoWin = false;
    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return !(a.indexOf(i) > -1);});
    };

    this.newGame = function(){
        this.available = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.playerOne = [];
        this.playerTwo = [];
    };

    this.setArrays = function(avail, one, two){
        this.available = avail;
        this.playerOne = one;
        this.playerTwo = two;
    };

    this.checkForWins = function(){
        for(var i = 0; i < 8; i++){
            if(self.wins[i].diff(self.playerOne).length === 0){
                this.playerOneWin = true;
            };
        }

        for(var i = 0; i < 8; i++){
            if(self.wins[i].diff(self.playerTwo).length === 0){
                this.playerTwoWin = true;
            };
        }
    };

    this.moveElement = function(arrayOne, arrayTwo, value){
        for(var len = arrayOne.length, i = 0; i < len; i++){
            if(arrayOne[i] === value){
                arrayTwo.push(arrayOne[i]);
                arrayOne.splice(i, 1);
            };
        };
    };
};
