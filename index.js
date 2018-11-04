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
var loginUrl = "";
app.post('/getName', function(request, response) {

            var perm = request.body.queryResult.parameters['given-perm'];
            var parameter = request.body.queryResult.parameters['given-parameter'];
            console.log("2222:" + perm);
            console.log("3333:" + parameter);
            if (perm !== null && perm !== '') {

                loginUrl = "https://ehpdev2.appiancloud.com/suite/webapi/SS_GetPerm?permitRef=";
                loginUrl = loginUrl + perm;
                var username = 'sai.ramesh@ehp.qld.gov.au';
                var password = 'Hanuman.01';
                var Request = unirest.get(loginUrl);
                Request.auth({
                    user: username,
                    pass: password,
                    sendImmediately: true
                });
                Request.end(function(res) {


                        console.log(res.body);
                        var result = res.body.results;

                        if (parameter == "status" && res.body.permitStatus) {
                            response.send(JSON.stringify({

                                "fulfillmentText": "Permit Status is " + res.body.permitStatus + " .Do you have any other questions?"

                            }));
                        } else if (parameter == "effective date" && res.body.effectiveDate) {
                                response.send(JSON.stringify({

                                    "fulfillmentText": "Permit effective date is " + res.body.effectiveDate + " .Do you have any other questions?"

                                }));

                            } else if (parameter == "anniversary date" && res.body.anniversaryDate) {
                                    response.send(JSON.stringify({

                                        "fulfillmentText": "Permit anniversary date is " + res.body.anniversaryDate + " Do you have any other questions?"

                                    }));

                                } else {
                                    response.send(JSON.stringify({

                                        "fulfillmentText": "Error has occured. Please email to connecthelp@des.gov.qld.au or call 1300Connect for further queries"

                                    }));
                                }

                            });

                    }


                });
            process.on('uncaughtException', function(err) {
                console.log(err);
            });
            app.listen(process.env.PORT || 3000, function() {
                console.log("listening on 3000");
            });
