var users = require('../models/user');
var jwt    = require('jsonwebtoken');
var user = users.user;
exports.createUser = function (req, res, next) {
    var points = new user
    ({
        name: req.body.name,
        password: req.body.password
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
exports.login = function (req, res) {

    // find the user
    user.findOne({
        name: req.body.name
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({success: false, message: 'user not found in database ,auth error'});
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({success: false, message: 'password error,not correct one'});
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user,'secret',{
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });

            }

        }

    });
};