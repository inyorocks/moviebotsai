console.log("Value of 0");
var express = require('express');
console.log("Value of a");
var http = require('http');
console.log("Value of b");
var app = express();
console.log("Value of c");
var server = http.createServer(app);
console.log("Value of 1");
// configure the app to use bodyParser()
var bodyParser = require('body-parser');
console.log("Value of 1.1");
app.use(bodyParser.json());
console.log("Value of 2");
app.post('/getName',function(req,res) {
	var val = req.body.queryResult.parameters.Name
	console.log("Value of 3");
	 res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        "fulfillmentText" : val 
                    }));
	console.log("Value of 4");
 }); 

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
