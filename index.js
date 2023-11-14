const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //  chose port from here like 8080, 3001
const job = require("~/cron.js");

job.start();
server.use(middlewares);
server.use(router);

server.listen(port);
