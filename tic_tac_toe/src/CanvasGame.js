define(['TicTac'], function(Logic){
	var CanvasGame = function(){
        var ticTac = new TicTac();
        var userRow;
        var userColumn;
        ticTac.newGame();
        var theCanvas = document.getElementById("canvasContainer");
        var context = theCanvas.getContext("2d");
        boxes = [];
        for (var i = 0; i < 3; i++) {
            boxes.push([0, i * 100, 100, 100 + i * 100]) 
            boxes.push([100, i * 100, 200, 100 + i * 100]) 
            boxes.push([200, i * 100, 300, 100 + i * 100])
        };

        var clearBoard = function() {
            context.fillStyle = "#ffffaa";
            context.fillRect(0, 0, 300, 300);
            context.fillRect(350, 50, 115, 40);
            resetButton = [350, 50, 465, 90];
            context.font = "20px _sans";
            context.textBaseline = "top";
            context.fillStyle = "#000000";
            context.fillText("Reset game", 360, 60);

            var drawLines = function(startX, startY, endX, endY) {
                context.fillStyle = "#000000";
                context.beginPath();
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
        };

        var showBoard = function(){
            context.font = "20px _sans";
            context.textBaseline = "top";
            for(i = 1; i < 10; i++) {
                if(i < 4) {
                    var x = 100 * (i - 1) + 40;
                    var y = 40;
                } else if (i < 7){
                    var x = 100 * (i - 4) + 40;
                    var y = 140;
                } else {
                    var x = 100 * (i - 7) + 40;
                    var y = 240;
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
