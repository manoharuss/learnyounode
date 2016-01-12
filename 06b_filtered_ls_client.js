"use strict";

let lsfilter = require("./06a_filtered_ls_module.js");

let dir = process.argv[2],
    ext = process.argv[3];

lsfilter(dir, ext, (err, files) => {
  if (err)
    return console.error("Error: ", err);

  files.map(file => console.log(file));
});
