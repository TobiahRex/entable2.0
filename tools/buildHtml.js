// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.

import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';  // eslint-disable-line

fs.readFile('src/index.html', (err, markup) => {
  process.stdout.write('\n');
  if (err) return process.stdout.write(`❌  fs.readFile ERROR: ${err}`);

  const $ = cheerio.load(markup);

  $('head').append('<link rel="stylesheet" href="style.css" />');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    process.stdout.write('\n');
    if (error) return process.stdout.write(`❌  fs.readFile ERROR: ${error}`.red.bold);
    return process.stdout.write('\n ✅  index.html written to "/dist"\n'.green.bold);
  });
  return 1;
});
