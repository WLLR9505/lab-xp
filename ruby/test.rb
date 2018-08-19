puts("Hello Ruby");

i = gets.to_i;
# Input de inteiro
if (i == 0) then
    puts("ZERO");
elsif (i == 1) then
    puts("UM")
else
    puts("OUTRO")
end

class PontoXY
    def set (x, y)
        @x = x
        @y = y
    end
    def showPoints
        puts("x: #{@x}   y: #{@y}")
    end
end
p1 = PontoXY.new
p1.set(5, 9)
p1.showPoints()
