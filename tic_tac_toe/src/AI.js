define(function() {
    var AI = function(){
        
        var itsBestToMoveHere = function(currentPlayer, listToMoveFrom, available) {
            if(listToMoveFrom.length > 0){
                return (listToMoveFrom[0]);
            };
        };

        this.move = function(currentPlayer, otherPlayer, available){
            var currentPlayer = currentPlayer;
            var otherPlayer = otherPlayer;
            var available = available;

            //can current player win right now? make it so
            if(itsBestToMoveHere(currentPlayer, currentPlayer.possibleWins, available)) {
                return itsBestToMoveHere(currentPlayer, currentPlayer.possibleWins, available)
            };

            //can opponent win right now? stop him
            if(itsBestToMoveHere(currentPlayer, otherPlayer.possibleWins)) {
                return itsBestToMoveHere(currentPlayer, otherPlayer.possibleWins, available)
            };

            //set up a fork, so current player can win next turn
            if(itsBestToMoveHere(currentPlayer, currentPlayer.forks)) {
                return itsBestToMoveHere(currentPlayer, currentPlayer.forks, available)
            };

            //if second player is in that weird flanked position place a side
            if(currentPlayer.squares[0] === 5 && ((otherPlayer.squares[0] === 1 && otherPlayer.squares[1] === 9) || (otherPlayer.squares[0] === 3 && otherPlayer.squares[1] === 7))){
                return 2;
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
                return otherPlayer.forks[temp];
            };
 
            //takes the center if available
            if(available.indexOf(5) > -1){
                return 5;
            };

            //takes a corner
            for(i = 1; i < 10; i += 2){
                if(available.indexOf(i) > -1){
                    return i;
                }
            }
            
            //takes a side
            for(i = 2; i < 9; i += 2){
                if(available.indexOf(i) > -1){
                    return i;
                }
            };
        };
    }
	return AI;
});
