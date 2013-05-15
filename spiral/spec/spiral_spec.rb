require 'Spiral'

describe Spiral do

    before(:each) do
        @spiral = Spiral.new()
    end

    describe "#drainage" do
        it "should go around the 4x4 block in a spiral adding each element to the spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.drainage()
            @spiral.spiral_string.should == '1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 '
        end

        it "should go around the 5x5 block in a spiral adding each element to the spiral_string" do
            @spiral.matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
            @spiral.drainage()
            @spiral.spiral_string.should == '1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 6 7 8 9 14 19 18 17 12 13'
        end

        it "should go around the 1x1 block in a spiral adding each element to the spiral_string" do
            @spiral.matrix = [[1]]
            @spiral.drainage()
            @spiral.spiral_string.should == '1'
        end
    end

    describe "#top" do
        it "should add the first three elements of the first array to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(0)
            @spiral.top()
            @spiral.spiral_string.should == '1 2 3 '
        end

        it "should add the first element of the inner block to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(1)
            @spiral.top()
            @spiral.spiral_string.should == '6 '
        end
    end

    describe "#right" do
        it "should add the right side elements of each array to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(0)
            @spiral.right()
            @spiral.spiral_string.should == '4 8 12 '
        end

        it "should add the side element of the inner block to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(1)
            @spiral.right()
            @spiral.spiral_string.should == '7 '
        end
    end

    describe "#bottom" do
        it "should add the right three elements of the last array to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(0)
            @spiral.bottom()
            @spiral.spiral_string.should == '16 15 14 '
        end

        it "should add the bottom element of the inner block to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(1)
            @spiral.bottom()
            @spiral.spiral_string.should == '11 '
        end
    end

    describe "#left" do
        it "should add the left three elements of each array to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(0)
            @spiral.left()
            @spiral.spiral_string.should == '13 9 5 '
        end

        it "should add the left element of the inner block to spiral_string" do
            @spiral.matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
            @spiral.dimentions(1)
            @spiral.left()
            @spiral.spiral_string.should == '10 '
        end
    end
end
