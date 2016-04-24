#!/usr/bin/env node

import overwrite from "overwrite";

overwrite("babel-cli", {
  "index.js": contents => {
    return `require("./lib/babel-node");`;
  },
  "lib/_babel-node.js": contents => {
    return contents
      .replace(/require\("babel-core"\)/gi, `require("${__dirname}/babel-core")["default"]`)
      .replace(/require\("babel-register"\)/gi, `require("${__dirname}/babel-register")["default"]`);
  }
});
