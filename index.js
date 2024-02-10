const express = require('express')
	const app = express()
	const port = 5000

	app.get('/',(req, res)=>{
    		res.send("Welcome to Server")
	})

	app.listen(port, (err)=>{
    		if(err){
        		console.log("Error occured",err);
    		}
    		else{
        		console.log("Server Is Running");
   		}
	})