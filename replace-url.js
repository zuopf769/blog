#!/usr/bin/env node
'use strict'
const fs = require('fs')

const GH_TOKEN = process.env.GH_TOKEN
const CODING_URL = process.env.CODING_URL

let content = fs.readFileSync('./_config.yml', 'utf8')
content = content
  .replace('GH_TOKEN', GH_TOKEN)
  .replace('CODING_URL', CODING_URL)

fs.writeFileSync('./_config.yml', content, 'utf8')
