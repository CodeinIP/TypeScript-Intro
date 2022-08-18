# INTRO-CLASS DAY-1

## TypeScript Intro Class

### Getting start with TypeScript

1. npm init -y
2. npm install typescript -y
3. `tsc -v` to check if typescript is intalled or not also version
4. tsc stands for typescript compiler
5. Create a `src` folder and write the basic Typescript code inside index.ts
6. In package.json inside scripts -> "build":"tsc --watch";
7. Create tsconfig.json file and paste this `{ "include": ["src"], "exclude": ["node_modules"], "compilerOptions": { "module": "commonjs", "outDir": "build", "target": "es2017", "declaration": true, "sourceMap": true } }`
8. To run code in ternimal change directory to `build` and run `node index.js`

### Compilation V/S Transpilation

#### Compilation:

- Source code(High level language) -> Compiler -> some other language(machine/low level language e.g binary)
- Low level language is usually machine readable code, eg; binay or bytecodes
- C, C++, `.exe`

##### Transpilation

- It generates code from high level language to another high level language
- Generally code is mostly human readable
- Transpiled code can go through another compilation step
- <h1>Hello world</h1> -JSX
- React.createElement("h1",null,"Hello world");
- # from ES6; "const x = 1" to ES3 "var x = 1"
  console.log(a) => the varaible are created first => compiled
  var a = 10; => undefined;
  ============
- Depending on where the JS code is running it can be both compiled and interpreted.
- VB -> Just-In-Time compilation , NodeJs, Deno, Brave

#### Interpretation

### Statically Typed Language and Dymanically Typed language

### Dynamically typed language

- The compiler has no idea about "types" at the compile time.
- let name = "Masai"; During hoisting variable is stored as `let name;` and compiler has no idea what is the type of name
- JS, Python, Ruby, etc...
- Generally slower
- Generally less safe.

### Statically typed language

- The compiler knows the "types" at the complie time.
- C, C++, Rust, Java, Python, TypeScript, ..
- e.g. in C `int x;` x is going to store only number
- `String x;` x is going to store only string

- Compiled language and Interpreted language

# TypeScript

- Statically typed language
- Superset of JS
- Just JavaScript
- TypeScript code -> Transpiled -> JavaScript
- It help in catching bugs or error which only show up on program execution

What, Why, How
