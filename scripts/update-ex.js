// @ts-check

const { readFileSync, writeFileSync } = require('fs');

const SINGLE_HTML_FILE = 'docs/single/index.html';
const WORKER_HTML_FILE = 'docs/worker/index.html';

const singleHtml = readFileSync(SINGLE_HTML_FILE, 'utf-8');
const workerHtml = readFileSync(WORKER_HTML_FILE, 'utf-8');

console.log('Updating base urls...');
writeFileSync(SINGLE_HTML_FILE, updateBase(singleHtml, '/ng-s-triangle-demo/single/'));
writeFileSync(WORKER_HTML_FILE, updateBase(workerHtml, '/ng-s-triangle-demo/worker/'));
console.log('Done');

/**
 * @param {String} html
 * @param {String} path
 */
function updateBase(html, path, oldPath = '/') {
  return html.replace(`<base href="${oldPath}">`, `<base href="${path}">`);
}
