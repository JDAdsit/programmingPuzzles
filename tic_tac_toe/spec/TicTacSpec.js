describe("TicTac", function() {
    var tic;

    beforeEach(function() {
        tic = new TicTac();
        tic.newGame();
    });

    describe('newGame', function(){
        it('should make a new board which is a nine element array', function(){
            expect(tic.available).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('should define the winning combonations', function(){
            expect(tic.wins).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]);
        });

        it('should start the players out with no squares', function(){
            expect(tic.playerOne).toEqual([]);
            expect(tic.playerTwo).toEqual([]);
        });
    });

    describe('setArrays', function(){
        it('should set the arrays to the starting position', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [], []);
            expect(tic.available).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(tic.playerOne).toEqual([]);
            expect(tic.playerTwo).toEqual([]);
        });

        it('should give each array 3 elements', function(){
            tic.setArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]);
            expect(tic.available).toEqual([1, 2, 3]);
            expect(tic.playerOne).toEqual([4, 5, 6]);
            expect(tic.playerTwo).toEqual([7, 8, 9]);
        });
    });

    describe('checkForWins', function(){
        it('should check if both players start set to false', function(){
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 1, 2, 3', function(){
            tic.setArrays([4, 5, 6, 7, 8, 9], [1, 2, 3], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 4, 5, 6', function(){
            tic.setArrays([1, 2, 3, 7, 8, 9], [4, 5, 6], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 7, 8, 9', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6], [7, 8, 9], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 1, 4, 7', function(){
            tic.setArrays([5, 2, 3, 6, 8, 9], [4, 1, 7], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 2, 5, 8', function(){
            tic.setArrays([1, 4, 3, 7, 6, 9], [8, 5, 2], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 3, 6, 9', function(){
            tic.setArrays([1, 4, 2, 7, 8, 5], [3, 6, 9], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 1, 5, 9', function(){
            tic.setArrays([6, 4, 2, 7, 8, 3], [1, 5, 9], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player one when he has win 3, 5, 7', function(){
            tic.setArrays([1, 4, 2, 9, 8, 6], [3, 5, 7], []);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(true);
            expect(tic.playerTwoWin).toEqual(false);
        });

        it('should return true for player two when he has win 1, 2, 3', function(){
            tic.setArrays([4, 5, 6, 7, 8, 9], [], [1, 2, 3]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 4, 5, 6', function(){
            tic.setArrays([1, 2, 3, 7, 8, 9], [], [4, 5, 6]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 7, 8, 9', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6], [], [7, 8, 9]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 1, 4, 7', function(){
            tic.setArrays([5, 2, 3, 6, 8, 9], [], [4, 1, 7]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 2, 5, 8', function(){
            tic.setArrays([1, 4, 3, 7, 6, 9], [], [8, 5, 2]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 3, 6, 9', function(){
            tic.setArrays([1, 4, 2, 7, 8, 5], [], [3, 6, 9]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 1, 5, 9', function(){
            tic.setArrays([6, 4, 2, 7, 8, 3], [], [1, 5, 9]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 3, 5, 7', function(){
            tic.setArrays([1, 4, 2, 9, 8, 6], [], [3, 5, 7]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should return true for player two when he has win 3, 5, 7 and extra places', function(){
            tic.setArrays([1, 4, 9, 8, 6], [], [3, 5, 7, 2]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(true);
        });

        it('should not return true for player two when he has 5, 7', function(){
            tic.setArrays([1, 4, 9, 8, 6, 3, 2], [], [5, 7]);
            tic.checkForWins();
            expect(tic.playerOneWin).toEqual(false);
            expect(tic.playerTwoWin).toEqual(false);
        });
    })

    describe('moveElement', function(){
        it('should move 1 from the first array to the second', function(){
            tic.moveElement(tic.available, tic.playerOne, 1);
            expect(tic.available).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
            expect(tic.playerOne).toEqual([1]);
        });

        it('should move 5 from the first array to the second', function(){
            tic.moveElement(tic.available, tic.playerOne, 5);
            expect(tic.available).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
            expect(tic.playerOne).toEqual([5]);
        });

        it('should move 7 from the first array to the second, then move 3 from the first to the second', function(){
            tic.moveElement(tic.available, tic.playerOne, 7);
            tic.moveElement(tic.available, tic.playerOne, 3);
            expect(tic.available).toEqual([1, 2, 4, 5, 6, 8, 9]);
            expect(tic.playerOne).toEqual([7, 3]);
        });

        it('should move 7 from the first array to the second, then move 3 from the first to a different second array', function(){
            tic.moveElement(tic.available, tic.playerOne, 7);
            tic.moveElement(tic.available, tic.playerTwo, 3);
            expect(tic.available).toEqual([1, 2, 4, 5, 6, 8, 9]);
            expect(tic.playerOne).toEqual([7]);
            expect(tic.playerTwo).toEqual([3]);
        });

    });
});
