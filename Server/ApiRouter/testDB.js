const express = require("express");const router = express.Router();const mongoose = require("mongoose");

//Variable to be sent to Frontend with Database statuslet databaseConnection = "Waiting for Database response...";
router.get("/", function(req, res, next) { res.send(databaseConnection);});
// Connecting to MongoDBmongoose.connect("mongodb://mongodb:27017/test");
// If there is a connection error send an error messagemongoose.connection.on("error", error => { console.log("Database connection error:", error); databaseConnection = "Error connecting to Database";});
// If connected to MongoDB send a success messagemongoose.connection.once("open", () => { console.log("Connected to Database!"); databaseConnection = "Connected to Database";});
module.exports = router;


