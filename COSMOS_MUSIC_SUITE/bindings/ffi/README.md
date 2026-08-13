# Universal FFI bridge

The C SDK is the universal native compatibility layer. Any language with C interoperability can call `cosmos_synaptic_step_v1` instead of reimplementing the state rule.

Common consumers include Objective-C, Swift, Zig, Nim, Julia, R, Fortran, MATLAB/Octave, LuaJIT, Delphi/FreePascal, Haskell, OCaml and native extensions for other runtimes.

Rules:

- use the exact structs in `../c/include/cosmos_synaptic.h`
- preserve the 12 state channels in ABI v1 order
- use binary64 / `double` values
- validate any independent implementation against `../conformance/golden-v1.json`
- use `../protocol/synaptic-v1.schema.json` when process-level JSON integration is easier than native FFI

That combination gives languages outside the first-class SDK list a stable compatibility path without forking the algorithm.
