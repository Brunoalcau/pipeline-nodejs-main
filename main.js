var 
    http = require('http'),
    fs = require('fs'),
    packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))

;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end(JSON.stringify({ version: packageJson.version }));

}).listen(process.env.PORT || 5000);
console.log('servidor iniciado http://localhost:5000');
