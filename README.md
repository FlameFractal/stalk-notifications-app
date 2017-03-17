## README - Stalking App (PubSub)

This app gives realtime notification of changes to a person's location.

### Setup instructions

1. Prerequisite installations

   1. Node.JS
   2. MongoDB

2. Download this git repository and install node modules

   `npm install`

3. Create a new database using **mongo shell**

   `use gossipgirl`

4. Create a Capped Collection called `location`

   `db.createCollection('location', { capped: true, size: 100000 });`

5. Insert a dummy document

   `db.location.insert({"type":"init"});`

### Publish location

1. Start application with parameters Name and Location

   `node pub.js Joel office`

### Stalk location

1. Stalk a particular person

   `node sub.js Joel`

2. Stalk everyone

      `node sub.js all`

### To do

1. Create a plain html user interface 
2. Build a REST API for pub/sub to DB