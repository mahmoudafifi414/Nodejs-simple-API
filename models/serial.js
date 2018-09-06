var mongoose = require('../database').mongoose;
var serialDetails = mongoose.Schema({
    name: String,
    description: String,
    director: String,
    actors: {type: Array},
    trailUrl: String,
    rates:{type:Array},
    comments:{type:Array},
});
exports.serial = mongoose.model("serial", serialDetails);