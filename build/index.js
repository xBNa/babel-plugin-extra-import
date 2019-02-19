const babel = require('@babel/core')
const path = require('path')
const fs = require('fs-extra')

const p = pa => path.join(__dirname, pa)

let {
    code
} = babel.transformFileSync(p('../src/index.js'))
fs.emptyDirSync(p('../dist'))
fs.outputFileSync(path.join(__dirname, '../dist/index.js'), code)