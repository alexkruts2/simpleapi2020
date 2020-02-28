module.exports = function(app, db) { 
 const collection =   app.post('/notes', (req, res) => {  
	 //const note = { "type": req.body.type, "id": req.body.id };    
		res.send(req.body.type);
	 });
 };
