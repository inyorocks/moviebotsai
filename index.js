var express = require('express');
var http = require('http');
var https = require('https');
var app = express();
var https = require('https');
var express1 = require('express');
var app1 = express();
var server = http.createServer(app);
var server1 = http.createServer(app1);
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/getName', function(request, response) { 
            var val = request.body.queryResult.parameters['GIVEN_NAME'];
     	    console.log("111111");
	    var username = "sai.ramesh@ehp.qld.gov.au"; 
            var password = "Hanuman.01";
            var authenticationHeader = "Basic " + new Buffer.from(username + ":" + password).toString("base64");
             console.log("1234");
            request.get(   
            {
            url : "https://ehpdev2.appiancloud.com/suite/webapi/permitSearch?permitRef_txt=EA0003548",
            headers : { "Authorization" : authenticationHeader }  
            },
            function (error, response, body) {
            
            console.log(error);
            } );    	
  });
	
         process.on('uncaughtException', function (err) {
       console.log(err);
       }); 
        app.listen(process.env.PORT || 3000, function() {
            console.log("listening on 3000");
        });
     app1.listen(8000, function () {
      console.log('Example app listening on port 8000!');
     });

	 
     
