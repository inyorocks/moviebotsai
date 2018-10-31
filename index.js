var app = require('express').createServer();
app.use(bodyParser.json());
app.post('/getName',function(req,res) {
	var val = req.queryResult.parameters['name']
	 res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        "fulfillmentText" : val
                    }));
 }); 
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
