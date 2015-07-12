
/**
* Esse projeto e um estudo de engenharia de software 
* @property pipeline
* @type {WebApi}
* @default "WebApi que retorna numero da versão e o que estra escrito na biblioteca"
*/

var 
    http = require('http'),
    fs = require('fs'),
    hello = require('pipeline-nodejs-component'),
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(process.env.NODE_ENV);
  res.end(JSON.stringify({ version: packageJson.version , msg:hello}));

}).listen(1337);
console.log('servidor iniciado http://localhost:1337');