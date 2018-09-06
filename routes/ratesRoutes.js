var ratesCtr=require('../controllers/ratesCtr');
module.exports = function (server) {
    //add rate to specific serial
    server.put('/rate/:serialname', ratesCtr.createRate);
};

