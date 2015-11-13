var express = require('express')
  , app = express()
  , port = 9911

  , fs = require('fs')
  , sys = require('util')
  , exec = require('child_process').exec
  , child,
  bodyParser = require('body-parser')
;

app.use(express.static(__dirname + '/page'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/cap', function(req,res){
  exec('phantomjs phantom.js', function(err, stdout){
    res.send("[Capture 200 OK]")
  })
})

app.post('/save', function(req,res){
  fs.writeFile('page/markup.html', req.body.markup, function(){
    res.redirect('/');
  })
})

console.log("OK @ " + port);
app.listen(port);
