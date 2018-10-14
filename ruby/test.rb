puts("Hello Ruby");


def desenharPlano (px, py)
    puts("\n\n")
    l = 10
    c = 0
    while (l > 0) #linhas
        printf("#{l}")
        if (py == l )
            pos = 0
            while (pos != px)   #alinha o ponto na horizontal
                pos += 1
                printf("    ")
                if (pos == px)
                    printf("*")
                end
            end
        end
        puts("\n|")
        l -= 1
    end
    while (c <= 10) #colunas
        printf("#{c} - ")
        c += 1
    end
    puts("\n\nX:#{px}   Y:#{py}")
end

class PontoXY
    def set (x, y)
        if ((x > 0 && x <= 10) && (y > 0 && y <= 10))
            @x = x
            @y = y
        else
            puts("Fora da escala")
        end
    end
    def mostrarPontos
        puts("\nx: #{@x}   y: #{@y}")
    end
    def mostrarPlano
        desenharPlano(@x, @y)
    end
end

p1 = PontoXY.new
puts("digite dois numeros ( 0  > n <= 10 ) :: pressione ENTER entre cada numero")
p1.set(gets.to_i, gets.to_i)

p1.mostrarPlano()
