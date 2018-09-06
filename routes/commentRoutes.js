var commentSerialCtr=require('../controllers/commentSerialCtr');
module.exports = function (server) {
    //add comment to specific serial
    server.put('/comment/:serialname', commentSerialCtr.createComment);

};

