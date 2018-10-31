var app = require('express').createServer();
app.use(bodyParser.json());
app.post('/getName',function(req,res) {
	const data = req.body;
	 res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        "fulfillmentText" : req.body.queryResult.parameters['name']
                    }));
 }); 
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
