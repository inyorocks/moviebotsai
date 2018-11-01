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
            console.log("Value of 3");
            var https = require('https');
            var username = 'sai.ramesh@ehp.qld.gov.au';
            var password = 'Hanuman.01';
            var options = {
              url: 'https://ehpdev2.appiancloud.com/suite/webapi/permitSearch?permitRef_txt=EA0003548',
              auth: {
                user: username,
                password: password
              }
            }
            var req = https.request(options, function(res) {
                if (res.error) {
                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "fulfillmentText": "Error Mate"
                    }));
                } else {

                    response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "fulfillmentText": "Thanks for reaching out " + val
                    }));
                }

            });
        });
        app.listen(process.env.PORT || 3000, function() {
            console.log("listening on 3000");
        });
