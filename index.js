var fs = require('fs')
var path = require('path')
var readline = require('readline')

var Idioms = {
  getIdioms: getIdioms
}

function getIdioms(callback){
  idioms = []
  getFreeDictionaryIdioms(function(freeDictionaryIdioms){
    idioms = idioms.concat(freeDictionaryIdioms)
    getWikiIdioms(function(wikiIdioms){
      idioms = idioms.concat(wikiIdioms)
      callback(idioms)
    })
  })
}
function getFreeDictionaryIdioms(callback){
  var freeDictionaryIdiomsList  = []
  var rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/free-dicionary-idioms.txt')
  });

  rl.on('line', function(line) {
    freeDictionaryIdiomsList.push(line)
  });
  rl.on('close', function(){
    callback(freeDictionaryIdiomsList)
  })
}

function getWikiIdioms(callback){
  var wikiIdiomList = []
  var rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/wiki-idioms.txt')
  });

  rl.on('line', function(line) {
    wikiIdiomList.push(line)
  });
  rl.on('close', function(){
    callback(wikiIdiomList)
  })
}

module.exports = Idioms
