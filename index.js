var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
// configure the app to use bodyParser()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/getName',function(request,response) {
	var val = request.body.queryResult.parameters['GIVEN_NAME'];
	console.log("Value of 3");
	response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "fulfillmentText" : "Thanks for reaching out " + val
                    }));
	console.log("Value of 4");
 }); 
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
