const path = require('path')
const getBamAsJson = require('../src')

getBamAsJson(path.join(__dirname, "/arzedaexample.bam")).then((jsonObj) => {
  console.log('jsonObj:',jsonObj)
})
