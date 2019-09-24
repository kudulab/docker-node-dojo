const ansiRegex = require('ansi-regex');
var assert = require('assert');
assert(ansiRegex().test('\u001B[4mcake\u001B[0m'));