var app = require('express').createServer();
app.post('/getName',function(req,res) {

var userName = req.body.queryResult.parameters['name'];
	    if(userName) {
	 res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        "fulfillmentText" : "Success in calling Node js. Good job" + userName        
                    }));
			}else{
						 res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify({
                        "fulfillmentText" : "Success in calling Node js"
        
                    }));
		    }				
					
 
});
app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
