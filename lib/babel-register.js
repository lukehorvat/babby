import overwrite from "overwrite";

export default overwrite("babel-register", {
  "lib/node.js": contents => {
    return contents.replace(/require\("babel-core"\)/gi, `require("${__dirname}/babel-core")["default"]`);
  }
});
