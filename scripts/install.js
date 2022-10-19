const clone = require('git-clone')
const replace = require('replace-in-file')
const rimraf = require('rimraf')
const path = require('path')
const fs = require('fs')
const patches = require('./patches')
const { zintVersion } = require('../package.json')
const fetch = require('node-fetch')
const tar = require('tar-fs')
const stream = require('stream')
const gunzip = require('gunzip-maybe')

/**
 * Returns the absolute path to the given file in zint source.
 *
 * @param {string} p path names
 * @returns {string}
 */
const getPath = p => path.join(__dirname, '../.zint', p)

/**
 * Creates zintconfig.h, which contains version definitions from CMake.
 */
const createConfigFile = () => {
  const fileData = fs
    .readFileSync(getPath('CMakeLists.txt'))
    .toString()
    .match(/ZINT_VERSION_[A-Z]+\s+[0-9]+/gi)
    .map(s => `#define ${s}`)
    .join('\n')

  fs.writeFileSync(getPath('backend/zintconfig.h'), fileData)
}

createConfigFile()
