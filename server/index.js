var express = require('express')
var fs = require('fs')
var path = require('path')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', function (req, res) {
  res.send('hello world')
})

https.createServer({
  // Certificate is generated by mkcert : https://github.com/FiloSottile/mkcert
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
}, app)
  .listen(3000, function () {
    console.log('Example app listening on port 3000! Go to https://localhost:3000/')
  })
