var express = require('express');
var http = require('http');
var https = require('https');
var app = express();
var unirest = require("unirest");
var https = require('https');
var express1 = require('express');
var app1 = express();
var server = http.createServer(app);
var server1 = http.createServer(app1);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/getName', function(request, response) { 
            var val = request.body.queryResult.parameters['GIVEN_NAME'];
     	    console.log("111111:"+val );
            var loginUrl = "https://ehpdev2.appiancloud.com/suite/webapi/permitSearch?permitRef_txt=EA0003553";
	    var username = 'sai.ramesh@ehp.qld.gov.au';
            var password = 'Hanuman.01';
            var Request = unirest.get(loginUrl);
            Request.auth({
		  user: username,
		  pass: password,
		  sendImmediately: true
		});

		Request.end(function (response) {
		  console.log(response.body);
		});
		
  });	
         process.on('uncaughtException', function (err) {
       console.log(err);
       }); 
        app.listen(process.env.PORT || 3000, function() {
            console.log("listening on 3000");
        });
     

	 
     
