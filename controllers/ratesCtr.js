var serial = require('../models/serial');
var ser = serial.serial;
exports.createRate = function (req, res, next) {
    var ratedBy=req.body.ratedby;
    var rateNum=req.body.ratenum;
    if (rateNum >= 1) {
        var rate = {"ratedBy": ratedBy, "rateNum": rateNum};
        ser.update({name: req.params.serialname},
            {
                "$push": {rates: rate}
            }, {multi: true},
            function (err, response) {
                res.send(response);
                console.log(response);
            });
    }
    else
    {
        res.json({'message':'the number of rating should be more than or equal one and less than or equal 5'});
    }

};
