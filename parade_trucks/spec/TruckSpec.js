var truck;

beforeEach(function(){
    truck = new Truck();
});

describe('newParade', function(){
    it('should create an empty array called sideStreet', function(){
        truck.newParade();
        expect(truck.sideStreet).toEqual([]);
    });

    it('should create an array called newMainStreet with a 1 in it', function(){
        truck.newParade();
        expect(truck.newMainStreet).toEqual([]);
    });

    it('should accept an array of numbers as mainStreets value', function(){
        truck.newParade([1, 2, 3]);
        expect(truck.mainStreet).toEqual([1, 2, 3]);
        truck.newParade([2, 3, 4]);
        expect(truck.mainStreet).toEqual([2, 3, 4]);
    });
});

describe('set', function(){

    it('should set the streets', function(){
        truck.set([1, 2, 3], [4, 5, 6], [7, 8, 9]);
        expect(truck.mainStreet).toEqual([1, 2, 3]);
        expect(truck.sideStreet).toEqual([4, 5, 6]);
        expect(truck.newMainStreet).toEqual([7, 8, 9]);
    });

});

describe('moveToSideStreet', function(){
    it('should push truck 0 to sideStreet when it is not 1', function(){
        truck.newParade([2, 1]);
        truck.moveToSideStreet(0);
        expect(truck.sideStreet).toEqual([2]);
        expect(truck.mainStreet).toEqual([2, 1]);
        expect(truck.newMainStreet).toEqual([]);
    });

    it('should not push truck 1 to sideStreet when it is 1', function(){
        truck.newParade([2, 1]);
        truck.moveToSideStreet(0);
        truck.moveToSideStreet(1);
        expect(truck.sideStreet).toEqual([2]);
        expect(truck.mainStreet).toEqual([2, 1]);
        expect(truck.newMainStreet).toEqual([1]);
    });

    it('should not push truck 0 to sideStreet when it is 1', function(){
        truck.newParade([1, 2]);
        truck.moveToSideStreet(0);
        expect(truck.sideStreet).toEqual([]);
        expect(truck.mainStreet).toEqual([1, 2]);
        expect(truck.newMainStreet).toEqual([1]);
    });

    it('should check if truck 1 is greater than truck 2', function(){
        truck.newParade([1, 3, 2]);
        truck.moveToSideStreet(1);
        expect(truck.sideStreet).toEqual([3]);
        expect(truck.mainStreet).toEqual([1, 3, 2]);
        expect(truck.newMainStreet).toEqual([]);
    });
});

describe('moveToMainStreet', function(){
    it('should move truck from end of sideStreet to end of newMainStreet', function(){
        truck.set([2, 1], [2], [1]);
        truck.moveToMainStreet();
        expect(truck.sideStreet).toEqual([]);
        expect(truck.mainStreet).toEqual([2, 1]);
        expect(truck.newMainStreet).toEqual([1, 2]);
    });

    it('should move truck from end of sideStreet to index 1 of newMainStreet', function(){
        truck.set([2, 1, 3], [2], [1]);
        truck.moveToMainStreet();
        expect(truck.sideStreet).toEqual([]);
        expect(truck.mainStreet).toEqual([2, 1, 3]);
        expect(truck.newMainStreet).toEqual([1, 2]);
    });
});

describe('checkOrder', function(){
    it('should return true if the sideStreet is empty and the newMainStreet is in order', function(){
        truck.set([3, 2, 1], [], [1, 2, 3]);
        spyOn(truck, 'checkOrder').andCallThrough();
        var temp = truck.checkOrder();
        expect(temp).toEqual(true);
    });

    it('should return false if there are trucks in the side street', function(){
        truck.set([3, 2, 1], [2], []);
        spyOn(truck, 'checkOrder').andCallThrough();
        var temp = truck.checkOrder();
        expect(temp).toEqual(false);
    });

    it('should return false if the trucks are out of order in the mainStreet', function(){
        truck.set([3, 1, 2], [], [3, 1, 2]);
        spyOn(truck, 'checkOrder').andCallThrough();
        var temp = truck.checkOrder();
        expect(temp).toEqual(false);
    });
});

describe('organizer', function(){
    it('should move a truck from index 0 to index 1 of mainStreet', function(){
        truck.newParade([2, 1]);
        truck.organizer();
        expect(truck.newMainStreet).toEqual([1, 2]);
        expect(truck.sideStreet).toEqual([]);
    });

    it('should return true if the trucks can be put in order 1-2', function(){
        truck.newParade([2, 1]);
        spyOn(truck, 'organizer').andCallThrough();
        var temp = truck.organizer();
        expect(temp).toEqual(true);
    });

    it('should return true if the trucks can be put in order 1-10', function(){
        truck.newParade([2, 1, 3, 4, 10, 9, 8, 7, 5, 6]);
        spyOn(truck, 'organizer').andCallThrough();
        var temp = truck.organizer();
        expect(temp).toEqual(true);
        expect(truck.newMainStreet).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(truck.sideStreet).toEqual([]);
    });

    it('should return false if the trucks cannot be put in order', function(){
        truck.newParade([2, 3, 1]);
        spyOn(truck, 'organizer').andCallThrough();
        var temp = truck.organizer();
        expect(temp).toEqual(false);
    });
});
