var fs = require('fs');
fs.appendFile('apple.txt','yes write your choice',function(err){
	if(err) throw err;
	console.log('uodated!');
})