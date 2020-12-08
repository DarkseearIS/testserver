const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ClientSchema = new Schema({
    name:String,
    lastName: String,
    email: String
});

const Client = mongoose.model("client", ClientSchema);

module.exports = Client;