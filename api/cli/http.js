const { Command } = require('commander');
const databaseConnect = require('../database');
const createHttpServer = require('../httpServer');

function startHttpServerCommand() {
  const port = 4000;
  const command = new Command('http');

  command
    .description(`start http server on port ${port}`)
    .action(() => {
      databaseConnect();

      createHttpServer(port);
    });

  return command;
}

module.exports = startHttpServerCommand;
