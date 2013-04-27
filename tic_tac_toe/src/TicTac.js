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
        this.playerOne = {
            squares : [],
            possibleWins : [],
            forks : [],
            hasWon : false,
            brain : null
        };
        this.playerTwo = {
            squares : [],
            possibleWins : [],
            forks : [],
            hasWon : false,
            brain : null
        };
    };

    this.setArrays = function(avail, one, two){
        //allows a tester to input array values directly
        this.available = avail;
        this.playerOne.squares = one;
        this.playerTwo.squares = two;
    };

    this.checkForWinner = function(){
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
        //moves ownership of a square from one array to another
        for(var len = arrayOne.length, i = 0; i < len; i++){
            if(arrayOne[i] === value){
                arrayTwo.push(arrayOne[i]);
                arrayTwo.sort();
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
            if(playerOneTemp.length === 1 && self.playerTwo.squares.indexOf(playerOneTemp[0]) === -1 ){
                this.playerOne.possibleWins.push(playerOneTemp[0])
            };
            if(playerTwoTemp.length === 1 && self.playerOne.squares.indexOf(playerTwoTemp[0]) === -1 ){
                this.playerTwo.possibleWins.push(playerTwoTemp[0])
            };
        }
    };

    this.possibleForks = function(){
        //checks if any forks can be setup on the next turn
        this.playerOne.forks = [];
        this.playerTwo.forks = [];

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
        this.playerOne.forks.sort();
        this.playerTwo.forks.sort();
    };

    this.setBrains = function(brainOne, brainTwo){
        this.playerOne.brain = brainOne;
        this.playerTwo.brain = brainTwo;
    };

    var itsBestToMoveHere = function(currentPlayer, listToMoveFrom) {
        if(listToMoveFrom.length > 0){
            self.moveElement(self.available, currentPlayer.squares, listToMoveFrom[0]);
            return true;
        };
    };

    this.aiTurn = function(currentPlayer, otherPlayer){
        this.possibleWins();
        this.possibleForks();
        var currentPlayer = currentPlayer;
        var otherPlayer = otherPlayer;

        //can current player win right now? make it so
        if(itsBestToMoveHere(currentPlayer, currentPlayer.possibleWins)) {
            return
        };

        //can opponent win right now? stop him
        if(itsBestToMoveHere(currentPlayer, otherPlayer.possibleWins)) {
            return
        };

        //set up a fork, so current player can win next turn
        if(itsBestToMoveHere(currentPlayer, currentPlayer.forks)) {
            return
        };

        //if second player is in that weird flanked position place a side
        if(currentPlayer.squares[0] === 5 && ((otherPlayer.squares[0] === 1 && otherPlayer.squares[1] === 9) || (otherPlayer.squares[0] === 3 && otherPlayer.squares[1] === 7))){
            this.moveElement(this.available, currentPlayer.squares, 2);
            return;
        };

        //set up forced plays, but dont force a fork
        if(otherPlayer.forks.length > 0 ){
            var temp = 0;
            var i = -1;
            while(temp === 0){
                i += 1;
                if(otherPlayer.forks[i] % 2 !== 0){
                    temp = i;
                    break;
                };
            };
            if (otherPlayer.forks.length === 1){
                temp = 0;
            };
            this.moveElement(this.available, currentPlayer.squares, otherPlayer.forks[temp]);
            return;
        };
        
        //takes the center if available
        if(self.available.indexOf(5) > -1){
            this.moveElement(this.available, currentPlayer.squares, 5);
            return;
        };

        //takes a corner
        for(i = 1; i < 10; i += 2){
            if(self.available.indexOf(i) > -1){
                this.moveElement(this.available, currentPlayer.squares, i);
                return;
            }
        }

        //takes a side
        for(i = 2; i < 9; i += 2){
            if(self.available.indexOf(i) > -1){
                this.moveElement(this.available, currentPlayer.squares, i);
                return;
            }
        }
    };
};
