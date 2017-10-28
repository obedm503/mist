import * as fs from 'fs-extra';
import { join } from 'path';
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

const defaults: any = { patterns: [] };
const url = join(__dirname, 'db.json');

export default fs.readJson(url)
  .catch(() => fs.outputJson(url, defaults))
  .then(() => low(new FileAsync(url)));