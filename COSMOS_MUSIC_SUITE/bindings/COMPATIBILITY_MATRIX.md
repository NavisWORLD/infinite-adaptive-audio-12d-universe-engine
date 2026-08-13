# Synaptic ABI v1 compatibility matrix

There are three supported paths: native reference SDKs, the stable C ABI, and the versioned JSON wire contract.

## Native reference SDKs

- Python — tested
- C — tested
- C++17+ — tested
- Rust — tested
- JavaScript — tested
- TypeScript — strict build tested

## C ABI bridge

The C ABI is the preferred compatibility path for Objective-C, Objective-C++, Swift, Zig, Nim, D, Ada, Fortran, Delphi/FreePascal, Julia, R, MATLAB/Octave, LuaJIT, Dart/Flutter native FFI, Unity native plugins, JNI/JNA integrations, .NET P/Invoke integrations, and other ecosystems with C foreign-function support.

## JSON bridge

The JSON schema is the preferred process boundary for Java, Kotlin, Scala, Groovy, Clojure, C#, F#, Visual Basic .NET, PowerShell, Ruby, PHP, Perl, Tcl, Erlang, Elixir, Haskell, OCaml, Go services, web services, plugins, and distributed systems when native loading is unnecessary or undesirable.

## Existing runtime choices

- Browser, Node.js, Deno, Bun, Electron: JavaScript or TypeScript reference SDK.
- Unreal Engine and custom C++ engines: C++ SDK.
- Unity: C ABI native plugin or .NET bridge.
- Godot: C/C++ bridge or JSON.
- React Native: JavaScript SDK or native bridge.
- WebAssembly: JavaScript/TypeScript SDK today; a compiled native bridge can target WASM without changing ABI semantics.

## When a language earns a native checkmark

A language is called a native reference SDK only after its source is committed under `bindings/`, its public numeric values preserve binary64 semantics, its 12-channel order matches ABI v1, and its build/conformance command passes in CI. Until then it remains fully interoperable through C ABI or JSON rather than being falsely marked native.
