const Booking = require('../models/Booking');
const { SUCCESS, CREATED, NO_CONTENT } = require('./../constants/http');
const amqplib = require('amqplib');
var q = 'delete-booking';
let conn = null;
//const open = require('amqplib').connect('amqp://condor3464.startdedicated.com');

class BookingController {
    async create({ request, response, params }) {
        const { body } = request;
        const record = new Booking({
            name:body.name,
            mail:body.mail,
            date:body.date,
            time:body.time,
            guests:body.guests
        });
        await record.save();
        response.status = CREATED;
        response.body = record.toJSON();
    }

    async remove({ request, response, params }) {
        const { id } = params;
        if (!conn) conn = await amqplib.connect(process.env.RABBITMQ);
        const ch = await conn.createChannel();
        await ch.assertQueue(q);
        console.log(id);
        console.log(process.env.RABBITMQ);
        await ch.sendToQueue(q, Buffer.from(JSON.stringify({id:id})));
        response.status = NO_CONTENT;
    }

    async syncRemove({id}) {
        await Booking.findOneAndDelete({_id:id}); //COLOCAR O ID
    }

    async list({ request, response, params }) {
        const data = await Booking.find({});
        response.status = SUCCESS;
        response.body = data;
    }
}

module.exports = BookingController;
