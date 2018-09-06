var mongoose = require('../database').mongoose;
var User = mongoose.Schema({
    name: String,
    password: String,
});
exports.user = mongoose.model("User", User);