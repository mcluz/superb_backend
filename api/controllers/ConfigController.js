const Config = require('../models/Config');
const mongoose = require('mongoose');
const { SUCCESS, CREATED, NO_CONTENT } = require('./../constants/http');

class ConfigController {
    // eslint-disable-next-line class-methods-use-this
    async getTimeRange({ request, response, params }) {
        var data = await Config.findOne({name:"default"});
        if (!data) data = {open:8, close:21};
        response.status = 201;
        response.body = data; 
    }

    async setTimeRange({ request, response, params }) {
        const { body } = request;
        var defaultData = await Config.findOneAndUpdate({name:"default"},{open:body.open, close:body.close});
        if (!defaultData) {
            var record = new Config({name:"default", open:body.open, close:body.close });
            await record.save();
            response.status = CREATED;
            response.body = record.toJSON();
            return;
        } 
        response.status = SUCCESS;
    }
}

module.exports = ConfigController;
