/*\
|*| Module: Filtered LS
|*| Read files from a directory and filter based 
|*| on the given filename extension.
|*|
|*| Exports a single function with parameters
|*|   dir       directory name
|*|   ext       filename extension
|*|   callback
\*/

"use strict";

let fs   = require("fs"),
    path = require("path");

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);

    files = files.filter(file => (path.extname(file) == "." + ext));
    return callback(null, files);
  });
};
