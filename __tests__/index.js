const util = require('util');
// override fs.readFile with promisified version to avoid callbacks
const fs = require('fs');
const peg = require("pegjs");

const pegGrammar = fs.readFileSync('./src/grammar.peg', 'utf-8');
const parser = peg.generate(pegGrammar);

test = require('tape');

const testString = `
<!DOCTYPE html>
<html>
`;

console.log(parser.parse(testString));

// test('should parse empty input', function(t){
//   var result;
//   t.plan(1);
//   // result = parser.parse('   ');
//   result = parser.parse('<!doctype>');
//   return t.deepEqual(result, []);
// });

