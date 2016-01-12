/*\
|*| Read the contents of a directory, and
|*| print out files that match the given 
|*| file extension.
|*|
|*| $ node 05_filtered_ls.js ./data txt
|*| => alice.txt
\*/

"use strict";

let fs   = require("fs"),
    path = require("path");

let dir = process.argv[2],
    ext = "." + process.argv[3];

fs.readdir(dir, (err, files) => {
  if (err) throw new Error();

  files.filter((file) => path.extname(file) == ext)
       .map((file) => console.log(file));
});
