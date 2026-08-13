CC ?= cc
CFLAGS ?= -O2 -std=c11 -Wall -Wextra -pedantic

.PHONY: all test clean
all: build/libcosmos_synaptic.a

build/cosmos_synaptic.o: src/cosmos_synaptic.c include/cosmos_synaptic.h
	mkdir -p build
	$(CC) $(CFLAGS) -Iinclude -c src/cosmos_synaptic.c -o $@

build/libcosmos_synaptic.a: build/cosmos_synaptic.o
	ar rcs $@ $<

test: build/conformance
	./build/conformance

build/conformance: src/cosmos_synaptic.c test/conformance.c include/cosmos_synaptic.h
	mkdir -p build
	$(CC) $(CFLAGS) -Iinclude src/cosmos_synaptic.c test/conformance.c -lm -o $@

clean:
	rm -rf build
