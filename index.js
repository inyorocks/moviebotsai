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
	var req = unirest("GET", "https://ehpdev2.appiancloud.com/suite/webapi/permitSearch?permitRef_txt=EA0003548");
            req.query({
                "page": "1",
                "language": "en-US",
                "username": "sai.ramesh@ehp.qld.gov.au",
		 "password" : "Hanuman.01"   
            });
            req.send("{}");
	console.log("Value of 4");
            req.end(function(res) {
                if(res.error) {
                   response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "fulfillmentText" : "Error Mate"
                    }));
				}else{
	
	response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "fulfillmentText" : "Thanks for reaching out " + val
                    }));
			}
	console.log("Value of 4");
 }); 
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
