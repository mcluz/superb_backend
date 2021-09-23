require('dotenv').config();
const { program } = require('commander');
const createHttpServer = require('./cli/http');
const consumer = require('./cli/consumer');

program.addCommand(createHttpServer());
program.addCommand(consumer());

(async function  main() {
    await program.parseAsync(process.argv);
})();