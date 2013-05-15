class Spiral
    attr_accessor :matrix, :spiral_string, :height, :width

    def initialize
        @spiral_string = ''
    end

    def dimentions(layer)
        @top = layer
        @bottom = @matrix.length - 1 - (layer * 2)
        @left = layer
        @right = @matrix[0].length - 1 - (layer * 2)
    end

    def top
        @right.times do |element|
            @spiral_string += @matrix[@top][element + @left].to_s + ' '
        end
    end

    def right
        @bottom.times do |element|
            @spiral_string += @matrix[element + @top][@right + @left].to_s + ' '
        end
    end

    def bottom
        @right.downto(1) do |element|
            @spiral_string += @matrix[@bottom + @top][element + @left].to_s + ' '
        end
    end

    def left
        @bottom.downto(1) do |element|
            @spiral_string += @matrix[element + @top][@left].to_s + ' '
        end
    end

    def drainage(layer = 0)
        dimentions(layer)
        if @matrix.length < layer * 2 
            return
        end
        top()
        right()
        bottom()
        left()
        drainage(layer + 1)
    end
end
