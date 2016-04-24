import overwrite from "overwrite";

export default overwrite("babel-core", {
  "lib/transformation/file/index.js": contents => {
    return contents.replace(/require\("babylon"\)/gi, `require("${__dirname}/babylon")["default"]`);
  },
  "lib/transformation/file/options/option-manager.js": contents => {
    let lines = contents.split("\n");
    lines.splice(182, 0, `
      if (plugin.prepare) {
        plugin.prepare(require("${__dirname}/babylon")["default"], require("babel-generator"), require("babel-types"));
      }
    `);
    return lines.join("\n")
  }
});
