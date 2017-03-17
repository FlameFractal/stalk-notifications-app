/* Connect to the database */
var mongo = require("mongodb")
var mongodbUri = "mongodb://127.0.0.1/gossipgirl"

/* Check if correct parameters are passed */
if (!(process.argv.length == 4)) {
  console.log("usage: node sub.js person-name location")
  process.exit(1)
}

name = process.argv[2]
location = process.argv[3]

mongo.MongoClient.connect (mongodbUri, function (err, db) {
  db.collection('location', function(err, collection) {
    /* Error handling */
    if (err) {
      throw err
    }
    else{
      console.log("Hello "+name)
      collection.insert({name: name, loc: location}, function(err, collection) {
        /* Error handling */
        if (err) {
          throw err
        }
        else{
          console.log("Location updated. At the "+location)
          process.exit(1)
        }
      });
    }
  });
});