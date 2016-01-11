/*\
|*| Read a file synchronously and print the
|*| number of newlines. The file path is given
|*| as the first command-line argument.
|*|
|*| $ node 03_sync_io.js data/alice.txt
|*| => 3736
\*/

"use strict";

let fs = require("fs");

let file  = process.argv[2];
let lines = fs.readFileSync(file, "utf8")  // Read the file,
              .trim()                      // trim off leading and trailing white space,
              .split("\n")                 // split on new lines and,
              .length;                     // count the number of lines.

console.log(lines);
