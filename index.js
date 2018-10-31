var app = require('express').createServer();
app.post('/getName',function(req,res) {

		
	res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        "fulfillmentText" : "Success in calling Node js " + "Good job"
			    
                    }));
	
});
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
