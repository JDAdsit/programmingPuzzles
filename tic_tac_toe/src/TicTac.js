function TicTac() {
    var self = this;
    this.available;
    this.wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    this.playerOne = {};
    this.playerTwo = {};
    Array.prototype.diff = function(a) {
        //returns which values are in array that aren't in a
        return this.filter(function(i) {return !(a.indexOf(i) > -1);});
    };

    this.newGame = function(){
        this.available = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.playerOne.squares = [];
        this.playerTwo.squares = [];
        this.playerOne.possibleWins = [];
        this.playerTwo.possibleWins = [];
        this.playerOne.forks = [];
        this.playerTwo.forks = [];
        this.playerOne.hasWon = false;
        this.playerTwo.hasWon = false;
    };

    this.setArrays = function(avail, one, two){
        //allows a tester to input array values directly
        this.available = avail;
        this.playerOne.squares = one;
        this.playerTwo.squares = two;
    };

    this.checkForWins = function(){
        //checks if someone won the game
        for(var i = 0; i < 8; i++){
            if(self.wins[i].diff(self.playerOne.squares).length === 0){
                this.playerOne.hasWon = true;
            };
            if(self.wins[i].diff(self.playerTwo.squares).length === 0){
                this.playerTwo.hasWon = true;
            };
        }

    };

    this.moveElement = function(arrayOne, arrayTwo, value){
        //moves ownership of a spot from one array to another
        for(var len = arrayOne.length, i = 0; i < len; i++){
            if(arrayOne[i] === value){
                arrayTwo.push(arrayOne[i]);
                arrayOne.splice(i, 1);
            };
        };
    };

    this.possibleWins = function(){
        //checks if any wins are possible on the next move
        this.playerOne.possibleWins = [];
        this.playerTwo.possibleWins = [];
        for(var i = 0; i < 8; i++){
            var playerOneTemp = self.wins[i].diff(self.playerOne.squares);
            var playerTwoTemp = self.wins[i].diff(self.playerTwo.squares);
            if(playerOneTemp.length === 1 && playerOneTemp.diff(self.playerTwo.squares) > 0){
                this.playerOne.possibleWins.push(self.wins[i].diff(self.playerOne.squares))
            };
            if(playerTwoTemp.length === 1 && playerTwoTemp.diff(self.playerOne.squares) > 0){
                this.playerTwo.possibleWins.push(self.wins[i].diff(self.playerTwo.squares))
            };
        }
    };

    this.possibleForks = function(){
        //checks if any forks can be setup on the next turn
        for(value in this.available){
            this.playerOne.squares.push(this.available[value]);
            this.possibleWins();
            if(this.playerOne.possibleWins.length === 2){
                this.playerOne.forks.push(self.available[value]);
            };
            this.playerOne.squares.pop();

            this.playerTwo.squares.push(this.available[value]);
            this.possibleWins();
            if(this.playerTwo.possibleWins.length === 2){
                this.playerTwo.forks.push(self.available[value]);
            };
            this.playerTwo.squares.pop();
        };
    };
};
