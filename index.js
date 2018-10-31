var app = require('express').createServer();
app.post('/getName',function(req,res) {
 if(res.body.result.parameters['name']) {
	 response.setHeader('Content-Type', 'application/json');
                    response.send(JSON.stringify({
                        "speech" : "Success called Node js  ? ",
                        "displayText" : "Success called Node js ? "
                    }));
 }
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
