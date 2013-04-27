describe('aiTurn', function(){
    var tic;

    beforeEach(function() {
        tic = new TicTac();
        ai = new AI();
        tic.newGame();
    });

    it('playerOne ai should win if it can', function(){
        tic.setArrays([3, 4, 5, 6, 7, 8, 9], [1, 2], []);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo);
        expect(tic.playerOne.squares).toEqual([1, 2, 3]);

        tic.setArrays([1, 4, 5, 6, 2, 8, 9], [3, 7], []);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo);
        expect(tic.playerOne.squares).toEqual([3, 5, 7]);
    });

    it('playerTwo ai should win if it can', function(){
        tic.setArrays([3, 4, 5, 6, 7, 8, 9], [], [1, 2]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 2, 3]);

        tic.setArrays([1, 4, 5, 6, 2, 8, 9], [], [3, 7]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([3, 5, 7]);
    });

    it('playerOne ai should block a win if it can not win', function(){
        tic.setArrays([3, 4, 5, 6, 7, 8, 9], [], [1, 2]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo);
        expect(tic.playerOne.squares).toEqual([3]);

        tic.setArrays([3, 1, 5, 2, 7, 8, 9], [], [4, 6]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo);
        expect(tic.playerOne.squares).toEqual([5]);
    });
    
    it('playerTwo ai should block a win if it can not win', function(){
        tic.setArrays([3, 4, 5, 6, 7, 8, 9], [1, 2], []);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([3]);

        tic.setArrays([3, 1, 5, 2, 7, 8, 9], [4, 6], []);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([5]);
    });

    it('playerOne ai should setup a fork if it cannot win and doesnt need to block', function(){
        tic.setArrays([3, 4, 2, 6, 7, 8], [1, 5], [9]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo);
        expect(tic.playerOne.squares).toEqual([1, 2, 5]);

        tic.setArrays([3, 4, 1, 6, 7, 9], [2, 5], [8]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo);
        expect(tic.playerOne.squares).toEqual([1, 2, 5]);
    });

    it('playerTwo ai should setup a fork if it cannot win and doesnt need to block', function(){
        tic.setArrays([3, 4, 2, 6, 7, 8], [9], [1, 5]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 2, 5]);

        tic.setArrays([3, 4, 1, 6, 7, 9], [8], [2, 5]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 2, 5]);
    });

    it('playerTwo ai should setup for a win but not setup opponent for a fork', function(){
        tic.setArrays([3, 4, 2, 6, 7, 8], [5, 9], [1]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 3]);

        tic.setArrays([1, 4, 2, 6, 8, 9], [5, 7], [3]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 3]);
    });

    it('playerTwo ai should setup for a win but not setup opponent for a fork', function(){
        tic.setArrays([2, 3, 4, 6, 7, 8], [1, 5], [9]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([3, 9]);
    });

    it('playerTwo ai should setup for a win but not setup opponent for a fork', function(){
        tic.setArrays([2, 1, 4, 6, 9, 8], [3, 5], [7]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 7]);
    });

    it('playerTwo ai should setup for a win but not setup opponent for a fork', function(){
        tic.setArrays([1, 3, 6, 7, 8, 9], [2, 4], [5]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 5]);
    });

    it('playerTwo ai should setup for a win but not setup opponent for a fork', function(){
        tic.setArrays([3, 4, 6, 7], [2, 5, 9], [1, 8]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([1, 3, 8]);
    });

    it('playerTwo ai should choose the side with a forced move on an angle flanked center', function(){
        tic.setArrays([2, 3, 4, 6, 7, 8], [1, 9], [5]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([2, 5]);
    });

    it('playerTwo ai should choose the side with a forced move on an angle flanked center', function(){
        tic.setArrays([1, 2, 4, 6, 8, 9], [3, 7], [5]);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne);
        expect(tic.playerTwo.squares).toEqual([2, 5]);
    });

    it('playerOne should take the center if it is free', function(){
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([5]);
    });

    it('playerTwo should take the center if it is free', function(){
        tic.setArrays([1, 2, 3, 4, 5, 6, 7, 8], [9], []);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne, tic.available);
        expect(tic.playerTwo.squares).toEqual([5]);
    });

    it('playerTwo should take a corner when one is available', function(){
        tic.setArrays([1, 2, 3, 4, 6, 7, 8, 9], [5], []);
        tic.possibleWins();
        tic.possibleForks();
        ai.aiTurn(tic.playerTwo, tic.playerOne, tic.available);
        expect(tic.playerTwo.squares).toEqual([1]);
    });

    it('playerOne should take a corner when one is available', function(){
        tic.setArrays([3], [1, 6, 7, 8], [2, 4, 5, 9]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([1, 3, 6, 7, 8]);

        tic.setArrays([7], [2, 3, 4, 9], [1, 5, 6, 8]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([2, 3, 4, 7, 9]);

        tic.setArrays([9], [1, 3, 4, 8], [2, 5, 6, 7]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([1, 3, 4, 8, 9]);
    });

    it('playerOne should take a side when that is all that is available', function(){
        tic.setArrays([2], [1, 6, 7, 8], [3, 4, 5, 9]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([1, 2, 6, 7, 8]);

        tic.setArrays([4], [2, 6, 7, 9], [1, 3, 5, 8]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([2, 4, 6, 7, 9]);

        tic.setArrays([6], [1, 3, 4, 8], [2, 5, 7, 9]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([1, 3, 4, 6, 8]);

        tic.setArrays([8], [2, 3, 4, 9], [1, 5, 6, 7]);
        ai.aiTurn(tic.playerOne, tic.playerTwo, tic.available);
        expect(tic.playerOne.squares).toEqual([2, 3, 4, 8, 9]);
    });

});

