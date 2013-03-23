var Truck = function(){
    var self = this;
    this.sideStreet;
    this.mainStreet;
    this.newMainStreet;

    this.newParade = function(startOrder){
        self.sideStreet = [];
        self.newMainStreet = [];
        self.mainStreet = startOrder;
    };

    this.set = function(main, side, newMain) {
        self.mainStreet = main;
        self.sideStreet = side;
        self.newMainStreet = newMain;
    };

    this.moveToSideStreet = function(num) {
        if(self.mainStreet[num] === 1){
            self.newMainStreet.push(1);
            return;
        }; 
        self.sideStreet.push(self.mainStreet[num]);
    };

   this.moveToMainStreet = function() {
        for(var len = self.sideStreet.length, i = 0; i < len; i++){
            var lastSide = self.sideStreet.length - 1;
            var lastMain = self.newMainStreet.length - 1;
            if(self.sideStreet[lastSide] === self.newMainStreet[lastMain] + 1) {
                self.newMainStreet.push(self.sideStreet[lastSide]);
                self.sideStreet.pop();
            };
        };
   }; 

   this.arrayCheck = function(arrOne, arrTwo) {
       if (arrOne.length != arrTwo.length) {
           return false;
       };

       for(key in arrOne) {
           if(arrOne[key] !== arrTwo[key]) {
               return false;
           };
       };
       return true;
   };

   this.checkOrder = function() {
        var mainSort = self.mainStreet.slice(0);
        mainSort.sort(function(a, b){return a-b});

        if(self.arrayCheck(self.newMainStreet, mainSort) && self.sideStreet.length === 0) {
            return true;
        } else {
            return false;
        };
   };
   
   this.organizer = function() {
       for(var len = self.mainStreet.length, i = 0; i < len; i++) {
            self.moveToSideStreet(i);
            var last = self.newMainStreet[self.newMainStreet.length-1];

            if(self.mainStreet[i] === self.newMainStreet[last] + 1){
                self.newMainStreet.push(self.mainStreet[i]);
            };

            self.moveToMainStreet();
       };
       return self.checkOrder();
   };
};
