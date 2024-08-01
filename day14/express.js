var express = require('express');
var app = expess();


app.get('/',function(req,res){
	res.send("welcome to express js world tested by sai");

});
app.listen(3000);