import overwrite from "overwrite";

export default overwrite("babylon", {
  "index.js": contents => {
    let lines = contents.split("\n");
    lines.splice(48, 0, 'exports.Parser = _parser2["default"];');
    return lines.join("\n");
  }
});
