var restify = require('restify');
var jwt    = require('jsonwebtoken');
var server = restify.createServer();
server.use(restify.jsonBodyParser({ mapParams: true }));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
//routes of user
var routes = require('./routes/userRoutes')(server);
//middleware of jwt API to authorize and filter
var routes = require('./routes/authMiddle')(server);
//routes of serial
var routes = require('./routes/serialRoutes')(server);
//routes of comment on serial
var routes = require('./routes/commentRoutes')(server);
//route of rate on serial
var routes = require('./routes/ratesRoutes')(server);
server.listen(8080);
