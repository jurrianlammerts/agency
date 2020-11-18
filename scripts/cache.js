const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function caseData() {
  const casesDirectory = path.join(process.cwd(), 'cases');
  const fileNames = fs.readdirSync(casesDirectory);
  const cases = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(casesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      subTitle: matterResult.data.subtitle,
    };
  });
  return `export const cases = ${JSON.stringify(cases)}`;
}

try {
  fs.readdirSync('cache');
} catch (e) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', caseData(), function (err) {
  if (err) return console.log(err);
  console.log('Cases cached.');
});
