const fs = require('fs')


function config() {
    let data = fs.readFileSync('././.env', 'utf8')
    let lines = data.split('\n').filter(isValid);
    lines
        .map(parse)
        .forEach(initEnvVariables)
}


function isValid(line) {
    return line.match(/(^[A-Za-z][a-zA-Z0-9$_]*[=].+)/)
}

function parse(line){
    let pair = line.split(/=(.+)/)
    return {name: pair[0], value: pair[1].replace(/['"]/g,'')}
}

function initEnvVariables(data){
    process.env[data.name] = data.value
}

module.exports = {config: config}