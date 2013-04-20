define(['TicTac'], function(Logic){
	var TextGame = function(){
        var ticTac = new TicTac();
        var userRow;
        var userColumn;
        ticTac.newGame();

        this.showBoard = function() {
            document.body.innerHTML = '';
            for(x = 1; x < 10; x++){
                if(ticTac.playerOne.squares.indexOf(x) > -1){
                    document.write(' x ')
                } else if(ticTac.playerTwo.squares.indexOf(x) > -1){
                    document.write(' o ')
                } else {
                    document.write(' _ ')
                }
                if(x === 3 || x === 6){
                    document.write('<br>')
                }
            }
        };

        while(!ticTac.playerTwo.hasWon && ticTac.available.length != 0){
            this.showBoard();
            do{
                box = window.prompt('Which box would you like to take?', '');
                box = parseInt(box)
            }while(ticTac.available.indexOf(box) < 0)

            ticTac.moveElement(ticTac.available, ticTac.playerOne.squares, box)
            this.showBoard();

            ticTac.aiTurn(ticTac.playerTwo, ticTac.playerOne);
            ticTac.checkForWinner();
            this.showBoard();
        };

        document.write('<br>game over')
	};
	return TextGame;
});
