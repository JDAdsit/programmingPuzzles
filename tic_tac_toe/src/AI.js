function AI(){

    tic = new TicTac();
    tic.newGame();
    
    var itsBestToMoveHere = function(currentPlayer, listToMoveFrom) {
        if(listToMoveFrom.length > 0){
            tic.moveElement(tic.available, currentPlayer.squares, listToMoveFrom[0]);
            return true;
        };
    };

    this.aiTurn = function(currentPlayer, otherPlayer, available){
        var currentPlayer = currentPlayer;
        var otherPlayer = otherPlayer;
        var available = available;

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
            tic.moveElement(tic.available, currentPlayer.squares, 2);
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
            tic.moveElement(tic.available, currentPlayer.squares, otherPlayer.forks[temp]);
            return;
        };
        
        //takes the center if available
        if(available.indexOf(5) > -1){
            tic.moveElement(tic.available, currentPlayer.squares, 5);
            return;
        };

        //takes a corner
        for(i = 1; i < 10; i += 2){
            if(available.indexOf(i) > -1){
                tic.moveElement(tic.available, currentPlayer.squares, i);
                return;
            }
        }

        //takes a side
        for(i = 2; i < 9; i += 2){
            if(available.indexOf(i) > -1){
                tic.moveElement(tic.available, currentPlayer.squares, i);
                return;
            }
        }
    };

}
