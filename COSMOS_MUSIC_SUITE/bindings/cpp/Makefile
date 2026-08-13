CXX ?= c++
CXXFLAGS ?= -O2 -std=c++17 -Wall -Wextra -pedantic

.PHONY: test clean
test: build/smoke
	./build/smoke

build/smoke: smoke.cpp include/cosmos/synaptic.hpp
	mkdir -p build
	$(CXX) $(CXXFLAGS) -Iinclude smoke.cpp -o $@

clean:
	rm -rf build
