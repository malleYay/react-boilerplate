var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendFile('public/index.html');
});

app.listen(3000);
console.log('Listening on port 3000...');
