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
            expect(tic.playerOne.squares).toEqual([]);
            expect(tic.playerTwo.squares).toEqual([]);
        });

        it('should start the brain to null', function(){
            expect(tic.playerOne.brain).toBeNull();
            expect(tic.playerTwo.brain).toBeNull();
        });
    });

    describe('setArrays', function(){
        it('should set the arrays to the starting position', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [], []);
            expect(tic.available).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            expect(tic.playerOne.squares).toEqual([]);
            expect(tic.playerTwo.squares).toEqual([]);
        });

        it('should give each array 3 elements', function(){
            tic.setArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]);
            expect(tic.available).toEqual([1, 2, 3]);
            expect(tic.playerOne.squares).toEqual([4, 5, 6]);
            expect(tic.playerTwo.squares).toEqual([7, 8, 9]);
        });
    });

    describe('checkForWinner', function(){
        it('should check if both players start set to false', function(){
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 1, 2, 3', function(){
            tic.setArrays([4, 5, 6, 7, 8, 9], [1, 2, 3], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 4, 5, 6', function(){
            tic.setArrays([1, 2, 3, 7, 8, 9], [4, 5, 6], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 7, 8, 9', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6], [7, 8, 9], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 1, 4, 7', function(){
            tic.setArrays([5, 2, 3, 6, 8, 9], [4, 1, 7], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 2, 5, 8', function(){
            tic.setArrays([1, 4, 3, 7, 6, 9], [8, 5, 2], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 3, 6, 9', function(){
            tic.setArrays([1, 4, 2, 7, 8, 5], [3, 6, 9], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 1, 5, 9', function(){
            tic.setArrays([6, 4, 2, 7, 8, 3], [1, 5, 9], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player one when he has win 3, 5, 7', function(){
            tic.setArrays([1, 4, 2, 9, 8, 6], [3, 5, 7], []);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(true);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });

        it('should return true for player two when he has win 1, 2, 3', function(){
            tic.setArrays([4, 5, 6, 7, 8, 9], [], [1, 2, 3]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 4, 5, 6', function(){
            tic.setArrays([1, 2, 3, 7, 8, 9], [], [4, 5, 6]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 7, 8, 9', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6], [], [7, 8, 9]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 1, 4, 7', function(){
            tic.setArrays([5, 2, 3, 6, 8, 9], [], [4, 1, 7]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 2, 5, 8', function(){
            tic.setArrays([1, 4, 3, 7, 6, 9], [], [8, 5, 2]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 3, 6, 9', function(){
            tic.setArrays([1, 4, 2, 7, 8, 5], [], [3, 6, 9]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 1, 5, 9', function(){
            tic.setArrays([6, 4, 2, 7, 8, 3], [], [1, 5, 9]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 3, 5, 7', function(){
            tic.setArrays([1, 4, 2, 9, 8, 6], [], [3, 5, 7]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);

            tic.setArrays([9, 8, 6], [1, 2, 4], [3, 5, 7]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should return true for player two when he has win 3, 5, 7 and extra places', function(){
            tic.setArrays([1, 4, 9, 8, 6], [], [3, 5, 7, 2]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(true);
        });

        it('should not return true for player two when he has 5, 7', function(){
            tic.setArrays([1, 4, 9, 8, 6, 3, 2], [], [5, 7]);
            tic.checkForWinner();
            expect(tic.playerOne.hasWon).toEqual(false);
            expect(tic.playerTwo.hasWon).toEqual(false);
        });
    })

    describe('moveElement', function(){
        it('should move 1 from the first array to the second', function(){
            tic.moveElement(tic.available, tic.playerOne.squares, 1);
            expect(tic.available).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
            expect(tic.playerOne.squares).toEqual([1]);
        });

        it('should move 5 from the first array to the second', function(){
            tic.moveElement(tic.available, tic.playerOne.squares, 5);
            expect(tic.available).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
            expect(tic.playerOne.squares).toEqual([5]);
        });

        it('should move 7 from the first array to the second, then move 3 from the first to the second', function(){
            tic.moveElement(tic.available, tic.playerOne.squares, 7);
            tic.moveElement(tic.available, tic.playerOne.squares, 3);
            expect(tic.available).toEqual([1, 2, 4, 5, 6, 8, 9]);
            expect(tic.playerOne.squares).toEqual([3, 7]);
        });

        it('should move 7 from the first array to the second, then move 3 from the first to a different second array', function(){
            tic.moveElement(tic.available, tic.playerOne.squares, 7);
            tic.moveElement(tic.available, tic.playerTwo.squares, 3);
            expect(tic.available).toEqual([1, 2, 4, 5, 6, 8, 9]);
            expect(tic.playerOne.squares).toEqual([7]);
            expect(tic.playerTwo.squares).toEqual([3]);
        });

        it('should not move a number from an array that does not contain it', function(){
            tic.setArrays([1, 2, 3, 4], [5, 6, 7], [8, 9]);
            tic.moveElement(tic.available, tic.playerOne.squares, 8);
            expect(tic.playerOne.squares).toEqual([5, 6, 7]);
            expect(tic.playerTwo.squares).toEqual([8, 9]);
        });
    });

    describe('possibleWins', function(){
        it('playerOne.possibleWins should be 3 when playerOne has 1 and 2', function(){
            tic.setArrays([3, 4, 5, 6, 7, 8, 9], [1, 2], []);
            tic.possibleWins();
            expect(tic.playerOne.possibleWins).toEqual([[3]]);
        });

        it('playerTwo.possibleWins should be 3 when playerTwo has 1 and 2', function(){
            tic.setArrays([3, 4, 5, 6, 7, 8, 9], [], [1, 2]);
            tic.possibleWins();
            expect(tic.playerTwo.possibleWins).toEqual([[3]]);
        });

        it('when playerOne has 6, 9 and playerTwo has 1, 2 playerOne.possibleWins should be 3 and playerTwo.possibleWins should be 3', function(){
            tic.setArrays([3, 4, 5, 7, 8], [6, 9], [1, 2]);
            tic.possibleWins();
            expect(tic.playerOne.possibleWins).toEqual([[3]]);
            expect(tic.playerTwo.possibleWins).toEqual([[3]]);
        });

        it('when playerOne has 8, 9 and playerTwo has 1, 2 playerOne.possibleWins should be 7 and playerTwo.possibleWins should be 3', function(){
            tic.setArrays([3, 4, 5, 6, 7], [8, 9], [1, 2]);
            tic.possibleWins();
            expect(tic.playerOne.possibleWins).toEqual([[7]]);
            expect(tic.playerTwo.possibleWins).toEqual([[3]]);
        });

        it('when playerOne has 3, 8, 9 and playerTwo has 1, 2 playerOne.possibleWins should be 6 or 7 and playerTwo.possibleWins should be empty', function(){
            tic.setArrays([4, 5, 6, 7], [3, 8, 9], [1, 2]);
            tic.possibleWins();
            expect(tic.playerOne.possibleWins).toEqual([[7], [6]]);
            expect(tic.playerTwo.possibleWins).toEqual([]);
        });

        it('when playerOne has 8, 9 and playerTwo has 1, 2, 7 playerOne.possibleWins should be empty and playerTwo.possibleWins should be 3 or 4', function(){
            tic.setArrays([3, 4, 5, 6], [8, 9], [1, 2, 7]);
            tic.possibleWins();
            expect(tic.playerOne.possibleWins).toEqual([]);
            expect(tic.playerTwo.possibleWins).toEqual([[3], [4]]);
        });
    });
    
    describe('possibleForks', function(){
        it('neither should have forks available at start', function(){
            expect(tic.playerOne.forks).toEqual([]);
            expect(tic.playerTwo.forks).toEqual([]);
        });

        it('playerOne.Forks should be 8, 9 if it has 5, 7 and playerTwo has 3, 4', function(){
            tic.setArrays([1, 2, 6, 8, 9], [5, 7], [3, 4]);
            tic.possibleForks();
            expect(tic.playerOne.forks).toEqual([8, 9]);
            expect(tic.playerTwo.forks).toEqual([]);
        });

        it('playerTwo.Forks should be 8, 9 if it has 5, 7 and playerOne has 3, 4', function(){
            tic.setArrays([1, 2, 6, 8, 9], [3, 4], [5, 7]);
            tic.possibleForks();
            expect(tic.playerOne.forks).toEqual([]);
            expect(tic.playerTwo.forks).toEqual([8, 9]);
        });

        it('playerOne.Forks should be 4 if it has 5, 7 and playerTwo has 3, 9', function(){
            tic.setArrays([1, 2, 4, 6, 8], [5, 7], [3, 9]);
            tic.possibleForks();
            expect(tic.playerOne.forks).toEqual([4]);
        });

        it('playerTwo.Forks should be 4 if it has 5, 7 and playerOne has 3, 9', function(){
            tic.setArrays([1, 2, 4, 6, 8], [3, 9], [5, 7]);
            tic.possibleForks();
            expect(tic.playerTwo.forks).toEqual([4]);
        });

        it('playerOne.Forks should be 3, 7 if it has 1, 9 and playerTwo has 5', function(){
            tic.setArrays([2, 3, 4, 6, 7, 8], [1, 9], [5]);
            tic.possibleForks();
            expect(tic.playerOne.forks).toEqual([3, 7]);
        });

        it('playerOne.Forks should be 3, 9 if it has 5, 6 and playerTwo has 4', function(){
            tic.setArrays([2, 1, 3, 9, 7, 8], [5, 6], [4]);
            tic.possibleForks();
            expect(tic.playerOne.forks).toEqual([3, 9]);
        });
    });

    describe('setBrains', function(){
        it('should set playerOne.brain to player', function(){
            tic.setBrains('player');
            expect(tic.playerOne.brain).toEqual('player');
        });

        it('should set playerTwo.brain to player', function(){
            tic.setBrains('player', 'player');
            expect(tic.playerTwo.brain).toEqual('player');
        });

        it('should set playerTwo.brain to ai', function(){
            tic.setBrains('player', 'ai');
            expect(tic.playerTwo.brain).toEqual('ai');
        });
    });

    describe('aiTurn', function(){
        it('playerOne ai should win if it can', function(){
            tic.setArrays([3, 4, 5, 6, 7, 8, 9], [1, 2], []);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 2, 3]);

            tic.setArrays([1, 4, 5, 6, 2, 8, 9], [3, 7], []);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([3, 5, 7]);
        });

        it('playerTwo ai should win if it can', function(){
            tic.setArrays([3, 4, 5, 6, 7, 8, 9], [], [1, 2]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 2, 3]);

            tic.setArrays([1, 4, 5, 6, 2, 8, 9], [], [3, 7]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([3, 5, 7]);
        });

        it('playerOne ai should block a win if it can not win', function(){
            tic.setArrays([3, 4, 5, 6, 7, 8, 9], [], [1, 2]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([3]);

            tic.setArrays([3, 1, 5, 2, 7, 8, 9], [], [4, 6]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([5]);
        });
        
        it('playerTwo ai should block a win if it can not win', function(){
            tic.setArrays([3, 4, 5, 6, 7, 8, 9], [1, 2], []);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([3]);

            tic.setArrays([3, 1, 5, 2, 7, 8, 9], [4, 6], []);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([5]);
        });

        it('playerOne ai should setup a fork if it cannot win and doesnt need to block', function(){
            tic.setArrays([3, 4, 2, 6, 7, 8], [1, 5], [9]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 2, 5]);

            tic.setArrays([3, 4, 1, 6, 7, 9], [2, 5], [8]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 2, 5]);
        });

        it('playerTwo ai should setup a fork if it cannot win and doesnt need to block', function(){
            tic.setArrays([3, 4, 2, 6, 7, 8], [9], [1, 5]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 2, 5]);

            tic.setArrays([3, 4, 1, 6, 7, 9], [8], [2, 5]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 2, 5]);
        });

        it('playerTwo ai should setup for a win but not setup opponent for a fork', function(){
            tic.setArrays([3, 4, 2, 6, 7, 8], [5, 9], [1]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 3]);

            tic.setArrays([1, 4, 2, 6, 8, 9], [5, 7], [3]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 3]);

            tic.setArrays([2, 3, 4, 6, 7, 8], [1, 5], [9]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([3, 9]);

            tic.setArrays([2, 1, 4, 6, 9, 8], [3, 5], [7]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 7]);

            tic.setArrays([1, 3, 6, 7, 8, 9], [2, 4], [5]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 5]);

            tic.setArrays([3, 4, 6, 7], [2, 5, 9], [1, 8]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1, 3, 8]);
        });

        it('playerTwo ai should choose the side with a forced move on an angle flanked center', function(){
            tic.setArrays([2, 3, 4, 6, 7, 8], [1, 9], [5]);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([2, 5]);
        });

        it('playerOne should take the center if it is free', function(){
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([5]);
        });

        it('playerTwo should take the center if it is free', function(){
            tic.setArrays([1, 2, 3, 4, 5, 6, 7, 8], [9], []);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([5]);
        });

        it('playerTwo should take a corner when one is available', function(){
            tic.setArrays([1, 2, 3, 4, 6, 7, 8, 9], [5], []);
            tic.aiTurn(tic.playerTwo, tic.playerOne);
            expect(tic.playerTwo.squares).toEqual([1]);
        });

        it('playerOne should take a corner when one is available', function(){
            tic.setArrays([3], [1, 6, 7, 8], [2, 4, 5, 9]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 3, 6, 7, 8]);

            tic.setArrays([7], [2, 3, 4, 9], [1, 5, 6, 8]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([2, 3, 4, 7, 9]);

            tic.setArrays([9], [1, 3, 4, 8], [2, 5, 6, 7]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 3, 4, 8, 9]);
        });

        it('playerOne should take a side when that is all that is available', function(){
            tic.setArrays([2], [1, 6, 7, 8], [3, 4, 5, 9]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 2, 6, 7, 8]);

            tic.setArrays([4], [2, 6, 7, 9], [1, 3, 5, 8]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([2, 4, 6, 7, 9]);

            tic.setArrays([6], [1, 3, 4, 8], [2, 5, 7, 9]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([1, 3, 4, 6, 8]);

            tic.setArrays([8], [2, 3, 4, 9], [1, 5, 6, 7]);
            tic.aiTurn(tic.playerOne, tic.playerTwo);
            expect(tic.playerOne.squares).toEqual([2, 3, 4, 8, 9]);
        });

    });
});
