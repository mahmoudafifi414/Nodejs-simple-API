var serial = require('../models/serial');
var ser = serial.serial;
exports.createSerial = function (req, res, next) {
    //split the actors and put them in array an then add them to the collection
    var actorsArr = req.body.actors.split(",");
    var points = new ser
    ({
        name: req.body.name,
        description: req.body.description,
        director: req.body.director,
        actors: actorsArr
    });
    points.save(function (err, response) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(response);
            res.send(response);
        }
    });
};
    exports.findOneSer = function (req, res ,next) {
        ser.findOne({name: req.params.serialname},
            function(err, response){
                console.log(response);
                res.send(response);
            });
    };

    exports.findAllSer = function (req, res ,next) {
        ser.find(function(err, response){
            console.log(response);
            res.send(response);
        });
    };

