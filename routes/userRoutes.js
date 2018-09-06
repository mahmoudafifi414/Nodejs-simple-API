var userCtr=require('../controllers/userCtr');
module.exports = function (server) {
    //login user
    server.post('user/login', userCtr.login);
    //create user
    server.post('/user/register', userCtr.createUser);

};
