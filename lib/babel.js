#!/usr/bin/env node

import overwrite from "overwrite";

overwrite("babel-cli", {
  "index.js": contents => {
    return `require("./lib/babel");`;
  },
  "lib/babel/index.js": contents => {
    return contents.replace(/require\("babel-core"\)/gi, `require("${__dirname}/babel-core")["default"]`);
  },
  "lib/babel/util.js": contents => {
    return contents.replace(/require\("babel-core"\)/gi, `require("${__dirname}/babel-core")["default"]`);
  }
});
