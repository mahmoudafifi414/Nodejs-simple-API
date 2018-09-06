var serial = require('../models/serial');
var ser = serial.serial;
exports.createComment = function (req, res, next) {
    var commentBody=req.body.commentbody;
    var commentedBy=req.body.commentedby;
    var comment={"commentBody":commentBody,"commentedBy":commentedBy};
    ser.update({name: req.params.serialname},
        {
            "$push": { comments: comment }
        },
        {multi:true},
        function (err, response) {
            console.log(response);
            res.send(response);
        });

};
