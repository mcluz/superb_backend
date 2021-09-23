const { Command } = require('commander');
const databaseConnect = require('../database');
const { bookingController } = require('../controllers');
//var open = require('amqplib').connect('amqp://rabbitmq');
var open = require('amqplib').connect(process.env.RABBITMQ);
var q = 'delete-booking';
// Consumer
function consumer() {
    const command = new Command('consumer');
    command
    .description(`start consumer`)
    .action(async () => {
        databaseConnect();
        var conn = await open;
        var ch = await conn.createChannel();
        await ch.assertQueue(q);
        ch.consume(q, async ({content}) => {
            var json = JSON.parse(content.toString());
            await bookingController.syncRemove(json);
        }, {noAck:true});
    });

  return command;
}

module.exports = consumer;