var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let count = 0;

app.use(express.static(__dirname + '/public'));

app.get('/api/value', (req, res) => {
   console.log(`Method Type: ${req.method} \n URL Type : '${req.url}'`);
   res.send(`${count}`);
});

app.post('/api/increment', (req, res) =>{
   count++;
   res.send(`${count}`);
});

app.post('/api/decrement', (req, res) =>{
   count--;
   res.send(`${count}`);
});


app.listen(3000);
console.log('Server listening on port 3000');

