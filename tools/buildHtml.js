// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.

import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';  // eslint-disable-line

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return process.stdout.write('ERROR: ', err);
  }

  const $ = cheerio.load(markup);

  /* since a separate spreadsheet is only utilized for the production build,
  need to dynamically add this here. */
  $('head').prepend('<link rel="stylesheet" href="style.css">');
  $('head').prepend('<link rel="stylesheet" href="style.scss">');

  return fs.writeFile('dist/index.html', $.html(), 'utf8', (error) => {
    if (error) {
      return process.stdout.write(error);
    }
    return process.stdout.write('index.html written to /dist'.green);
  });
});
