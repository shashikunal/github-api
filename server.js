var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

port = process.env.PORT || 4444;

app.listen(port , function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Server is running on' + ' ' + port );
	}
});