var express = require('express');
var http = require('http');
var https = require('https');

var app = express();
var server = http.createServer(app);
// configure the app to use bodyParser()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/getName', function(request, response) {
            var val = request.body.queryResult.parameters['GIVEN_NAME'];
           // Include the request library for Node.js   
           //  Basic Authentication credentials   
            var username = "sai.ramesh@ehp.qld.gov.au"; 
            var password = "Hanuman.01";
            var authenticationHeader = "Basic " + new Buffer.from(username + ":" + password).toString("base64");
            https.request(   
            {
            url : "https://ehpdev2.appiancloud.com/suite/webapi/permitSearch?permitRef_txt=EA0003548",
            headers : { "Authorization" : authenticationHeader }  
            },
            function (error, response, body) {
             console.log("response":response);
            console.log("error":error);
            console.log("body":body);
            } );    
            
          
        });
        app.listen(process.env.PORT || 3000, function() {
            console.log("listening on 3000");
        });
