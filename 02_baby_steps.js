/*\
|*| Accept one or more numbers as command-line
|*| arguments and print their sum.
|*|
|*| $ node 02_baby_steps.js 1 2 3 4 5
|*| => 15
\*/

"use strict";

let args = process.argv.slice(2);
let sum  = args.map((x) => Number(x))
               .reduce((x, y) => x + y);

console.log(sum);
