# babby [![NPM version](http://img.shields.io/npm/v/babby.svg?style=flat-square)](https://www.npmjs.org/package/babby) ![Status](https://img.shields.io/badge/status-experimental-orange.svg?style=flat-square)

![](https://i.imgur.com/exVy1aHb.jpg)

A thin wrapper around Babel v6 to enable __advanced__ plugins.

"Advanced" plugins can modify Babel's parser to add new tokenizer token types and AST node types! 😎

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

The following "advanced" Babel plugins have been developed so far:

- [transform-shorthand-instance-expressions](https://github.com/lukehorvat/babel-plugin-transform-shorthand-instance-expressions)

If you've created a plugin and want it added to the list, send me a pull request.
