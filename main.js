var 
    http = require('http'),
    fs = require('fs'),
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))

;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(process.env.NODE_ENV);
  res.end(JSON.stringify({ version: packageJson.version }));

}).listen(1337);
console.log('servidor iniciado http://localhost:1337');