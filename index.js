const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://chequer:******@mongo-srv-test.querypie.com/?ssl=false';
console.log('Connect to', url);

// Database Name
const dbName = 'admin';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    findDocuments(db);

    client.close();
});
const findDocuments = function(db) {
    // Get the documents collection
    const collection = db.collection('system.users');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
    });
};
