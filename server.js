var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors())


var bodyParser     = require('body-parser');
var methodOverride = require('method-override');



app.use(express.static(__dirname + '/angularjs'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 


app.get('/hello', function(req, res){
  res.send('hello world sachin api');
});

app.post('/hello', function(req, res){
  res.send({red:"red controller post  API"});
});

app.put('/hello', function(req, res){
  res.send({green:"green put"});
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});