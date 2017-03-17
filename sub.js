/* Connect to the database */
var mongo = require("mongodb")
var mongodbUri = "mongodb://127.0.0.1/gossipgirl"

/* Check if correct parameters are passed */
if (!(process.argv.length == 3)) {
	console.log("usage: node sub.js (person-name|all)")
	process.exit(1)
}

/* Define 'find' query obj for a specific person or all people */
if (process.argv[2]=="all") {
	frmParam = {}
} else {
	frmParam = {name:process.argv[2]}
}

/* Create a tailable cursor */
mongo.MongoClient.connect (mongodbUri, function (err, db) {
	db.collection('location', function(err, collection) {
		/* Error handling */
		if (err) {
			throw err
		}
		else{
			console.log("Notifying about "+process.argv[2])
			collection.find(frmParam, {tailable:true, awaitdata:true, numberOfRetries:-1}).each(function(err, doc) {
				console.log(doc.name+" just entered the "+doc.loc)
			})
		}
	});
});