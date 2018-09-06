var serialCtr=require('../controllers/serialCtr');
module.exports = function (server) {
    //serial routes
    //create new serial
    server.post('/create', serialCtr.createSerial);
//find specific serial
    server.get('/serial/:serialname', serialCtr.findOneSer);
//find all serials
    server.get('/serial', serialCtr.findAllSer);

};

