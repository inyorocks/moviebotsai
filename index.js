var app = require('express').createServer();
app.post('/getName',function(req,res) {
	 if(req.query.param1 != null) {
	res.send("Hello World " + req.query.param1!");
	 }else{
	res.send("Hello World");	 
	 }
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
