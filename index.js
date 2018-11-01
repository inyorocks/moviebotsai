console.log("Value of 0");
var app = require('express').createServer();
console.log("Value of 1");
// configure the app to use bodyParser()
app.use(bodyParser.json());
console.log("Value of 2");
app.post('/getName',function(req,res) {
	var val = req.queryResult.parameters['name'];
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
