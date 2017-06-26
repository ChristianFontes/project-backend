/**
 * Ticket.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:{
      type: 'string',
      required: true
    },
    content:{
      type: 'text',
      required: true
    },
    user: {
      collection: 'User', //project
      via: 'member',
      through: 'ticketuser', //userproject
      dominant: true
    },
  },
  afterCreate: function(obj, next) {
      sails.io.sockets.emit('new ticket', obj);
      next();
  },
  seedData:[
      
    ]
};
