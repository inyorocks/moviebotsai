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
	ar request = require('request');

	var url = 'https://ehpdev2.appiancloud.com/suite/webapi/permitSearch?permitRef_txt=val';
	var user = 'sai.ramesh@ehp.qld.gov.au';
	var pass = 'Hanuman.01';

	// Save these for future requests
	var userId;
	var authToken;

	// Use POST instead of GET
	request.post(
	  {
	    uri: url,
	    // I'm using form because it matches the urlEncoding behaviour expected by `restivus`
	    form: { username: user, password: pass }
	  },
	  function(err, httpResponse, body) {
	    if (err) {
	      return console.error('post failed:', err);
	    }
        )
	
	response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "fulfillmentText" : "Thanks for reaching out " + val
                    }));
	console.log("Value of 4");
 }); 
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
