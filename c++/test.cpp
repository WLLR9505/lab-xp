#include <iostream>

int main() {
    enum estado { normal, alerta, perigo }; //0 1 2

    std::cout << "Hello C++\n";

    if (perigo == 2) {
        std::cout << "perigo\n";
    }
    return 0;
}
