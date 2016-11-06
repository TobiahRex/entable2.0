const bluemixResponse = require('./test2');

const results = [...bluemixResponse.results];
const resultsObj = {};
const finalResults = {};

results.forEach((result, i) => {
  resultsObj[i] = [...result.alternatives][0].timestamps;
});

for (const key in resultsObj) { //eslint-disable-line
  finalResults[key] = resultsObj[key].length;
}

let totalWords = 0;
Object.keys(finalResults).forEach((key) => {
  totalWords += finalResults[key];
});

const lastKey = Object.keys(finalResults).pop();
const totalLength = resultsObj[lastKey].pop()[2];
const wpm = (totalWords / (60 / totalLength)).toFixed(2);

console.log('totalLength: ', totalLength);
console.log('totalWords: ', totalWords);
console.log('wpm: ', wpm);
