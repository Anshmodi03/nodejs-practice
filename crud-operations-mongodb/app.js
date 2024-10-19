const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

// MongoDB Connection URL and Database Name
const url = "mongodb://localhost:27017";
const dbName = "mydatabase";

MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);

  // CRUD routes would go here
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
