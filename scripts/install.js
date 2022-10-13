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

/** Current zint git ref (specified in package.json) */
const checkout = zintVersion || 'master'

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

/**
 * Clones zint, then applies C source patches.
 */
// const cloneAndPatch = async () => {
//   console.log('Removing any existing .zint directory...')
//
//   rimraf(path.join(__dirname, '../.zint'), async () => {
//     // console.log(`Cloning zint at '${checkout}' in`, path.join(__dirname, '../.zint'))
//     fs.mkdir(path.join(__dirname, '../.zint'), async () => {
//
//       const res = await fetch('https://github.com/zint/zint/archive/refs/tags/2.11.1.tar.gz');
//       const arrayBuffer = await res.arrayBuffer();
//       const buffer = new Uint8Array(arrayBuffer);
//
//       await stream.Readable.from(buffer)
//         .pipe(gunzip())
//         .pipe(tar.extract(path.join(__dirname, '../.zint')));

      // patches.forEach(patch => replace.sync(patch))

      createConfigFile()

//     })
//   })
// }
//
//
// cloneAndPatch()

