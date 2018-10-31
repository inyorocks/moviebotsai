var app = require('express').createServer();
app.post('/getName',function(req,res) {
	 if(req.body.result.parameters['Name']) {
	res.send("Hello World" + "Name");
	 }else{
	res.send("Hello World");	 
	 }
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
