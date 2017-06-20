/**
 * Incidence.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    status: {
      type: 'text',
      required: true
    },
    inventory: {
      collection: 'inventory',
      via: 'member',
      through: 'incidenceinventory',
      dominant: true
    },
    user: {
      collection: 'User', //project
      via: 'manager',
      through: 'incidenceuser', //userproject
      dominant: true
    }
  },
  seedData:[
    {
      status: 'comentario del gestor',
      user: 1,
      inventory: 1
    }
  ]
};
