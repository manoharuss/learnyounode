/*\
|*| Read a file asynchronously and print the
|*| number of newlines. The file path is given
|*| as the first command-line argument.
|*|
|*| $ node 04_async_io.js data/alice.txt
|*| => 3736
\*/

"use strict";

let fs = require("fs");

let file  = process.argv[2];
fs.readFile(file, "utf8", (err, data) => {
  if (err) throw new Error();

  let lines = data.trim()
                  .split("\n")
                  .length;

  console.log(lines);
});
