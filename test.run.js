const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const dirName = process.argv[2];

function getFilePath(base, fileName) {
  return path.join(base, fileName);
}

function isEnd(p) {
  const files = fs.readdirSync(p);
  return files.some(f => f.indexOf('test') > -1);
}

function isDir(file) {
  return fs.statSync(file).isDirectory;
}

function getTargePath() {
  if (dirName) {
    try {
      let p = getFilePath('./exercises', '');
      const files = fs.readdirSync(p);
      const queue = files.map(f => getFilePath(p, f));
      let file = queue.shift();
      while (file && isDir(file)) {
        if (isEnd(file) && file.endsWith(dirName)) {
          return path.join(file, 'test.js');
        }
        const items = fs.readdirSync(file);
        queue.push(...items.map(item => getFilePath(file, item)));
        file = queue.shift();
      }
    } catch (e) {
      console.warn(e);
    }
  }
}

exec(`./node_modules/.bin/mocha ${getTargePath()}`, (err, stdout) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
