// @ts-check

const { readFileSync, writeFileSync } = require('fs');

const SINGLE_HTML_FILE = 'example/single/index.html';
const WORKER_HTML_FILE = 'example/worker/index.html';

const singleHtml = readFileSync(SINGLE_HTML_FILE, 'utf-8');
const workerHtml = readFileSync(WORKER_HTML_FILE, 'utf-8');

console.log('Updating base urls...');
writeFileSync(SINGLE_HTML_FILE, updateBase(singleHtml, '/single/'));
writeFileSync(WORKER_HTML_FILE, updateBase(workerHtml, '/worker/'));
console.log('Done');

/**
 * @param {String} html
 * @param {String} path
 */
function updateBase(html, path, oldPath = '/') {
  return html.replace(`<base href="${oldPath}">`, `<base href="${path}">`);
}
