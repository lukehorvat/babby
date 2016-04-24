# babby [![NPM version](http://img.shields.io/npm/v/babby.svg?style=flat-square)](https://www.npmjs.org/package/babby)

A thin wrapper around Babel v6 to enable __advanced__ plugins.

"Advanced" plugins can modify Babel's parser to add new tokenizer token types and AST node types.

Not sure what that means? See here: https://github.com/babel/babylon/issues/22

## Installation

Install the package with NPM:

```bash
$ npm install babby
```

## Usage

To use Babby, simply substitute it in place of whichever Babel package you're currently using to transpile code (i.e. `babel-cli`, `babel-register`, etc.). Everything else should work, no further changes necessary.

For a full example, see here: https://github.com/lukehorvat/babby-example

## Advanced Plugins

The following "advanced" Babel plugins are supported:

- [transform-shorthand-instance-expressions](https://github.com/lukehorvat/babel-plugin-transform-shorthand-instance-expressions)
