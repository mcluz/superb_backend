const Table = require('../models/Table');
const mongoose = require('mongoose');
const { SUCCESS, CREATED, NO_CONTENT } = require('./../constants/http');


class TableController {
  // eslint-disable-next-line class-methods-use-this
  async create({ request, response, params }) {
    const { body } = request;
    const { restaurantId } = params;

    const record = new Table({
      ...body,
      restaurantId,
    });

    await record.save();

    response.status = CREATED;
    response.body = record.toJSON();
  }

  async remove({ request, response, params }) {
    var {id} = params;
    await Table.findOneAndDelete({_id:id}); //COLOCAR O ID
    response.status = NO_CONTENT;
  }

  async list({ request, response, params }) {
    const data = await Table.find({});
    response.status = SUCCESS;
    response.body = data;
  }
}

module.exports = TableController;
