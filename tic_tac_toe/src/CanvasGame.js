define(['TicTac'], function(){
	var CanvasGame = function(){
        var ticTac = new TicTac();
        ticTac.newGame();
        var theCanvas = document.getElementById("canvasContainer");
        var context = theCanvas.getContext("2d");
        var boxes = [];
        for (var i = 0; i < 3; i++) {
            boxes.push([0, i * 100, 100, 100 + i * 100]) 
            boxes.push([100, i * 100, 200, 100 + i * 100]) 
            boxes.push([200, i * 100, 300, 100 + i * 100])
        };

        var clearBoard = function() {
            context.clearRect(0, 0, 500, 500)
            context.fillStyle = "#c8b7b7";
            context.fillRect(0, 0, 300, 300);

            context.fillStyle = "#000000";
            context.fillRect(350, 50, 117, 42);
            context.fillStyle = "#8184a3";
            context.fillRect(350, 50, 115, 40);
            resetButton = [350, 50, 465, 90];
            context.font = "20px _sans";
            context.textBaseline = "top";
            context.fillStyle = "#000000";
            context.fillText("Reset game", 360, 60);

            context.fillText("Tic-Tac-Toe", 10, 330);
            context.fillText("Try to get three in a row before your opponent does.", 10, 350);

            var drawLines = function(startX, startY, endX, endY) {
                context.fillStyle = "#000000";
                context.beginPath();
                context.lineWidth = 2;
                context.moveTo(startX, startY);
                context.lineTo(endX, endY);
                context.stroke();
            };
            drawLines(100, 0, 100, 300);
            drawLines(200, 0, 200, 300);
            drawLines(0, 100, 300, 100);
            drawLines(0, 200, 300, 200);
        };
        clearBoard();

        var gameOver = function(){
            var x = 350;
            var y = 160;
            
            context.clearRect(x, y, 150, 45)
            context.font = "20px _sans";
            if(ticTac.playerOne.hasWon){
                context.fillText("Player one has", x, y);
                context.fillText("won the game", x, y + 20);
            } else if(ticTac.playerTwo.hasWon) {
                context.fillText("Player two has", x, y);
                context.fillText("won the game", x, y + 20);
            } else {
                context.fillText("No one won", x, y);
            }
        };

        var doMouseDown = function(event) { 
            x = event.pageX;
            y = event.pageY;

            if((x > resetButton[0] && x < resetButton[2]) && (y > resetButton[1] && y < resetButton[3])){
                ticTac.newGame();
                clearBoard();
            };

            while(!ticTac.playerTwo.hasWon && ticTac.available.length != 0){
                var box = whichBox(x, y) + 1;
                if(ticTac.available.indexOf(box) < 0) {
                    return
                };
                ticTac.moveElement(ticTac.available, ticTac.playerOne.squares, box)
                ticTac.aiTurn(ticTac.playerTwo, ticTac.playerOne);
                ticTac.checkForWinner();
                showBoard();
            };
            gameOver();
        };

        var showBoard = function(){
            context.font = "40px _sans";
            context.textBaseline = "top";
            for(i = 1; i < 10; i++) {
                if(i < 4) {
                    var x = 100 * (i - 1) + 35;
                    var y = 30;
                } else if (i < 7){
                    var x = 100 * (i - 4) + 35;
                    var y = 130;
                } else {
                    var x = 100 * (i - 7) + 35;
                    var y = 230;
                };
                if(ticTac.playerOne.squares.indexOf(i) > -1){
                    context.fillText("X", x, y);
                } else if(ticTac.playerTwo.squares.indexOf(i) > -1){
                    context.fillText("O", x, y);
                };
            };
        };

        var whichBox = function(clickedX, clickedY) {
            for(i = 0; i < 9; i++){
                if((clickedX > boxes[i][0] && clickedX < boxes[i][2]) && (clickedY > boxes[i][1] && clickedY < boxes[i][3])){
                    return i;
                };
            };
        };

        theCanvas.addEventListener("mousedown", doMouseDown, false);
	};
	return CanvasGame;
});
