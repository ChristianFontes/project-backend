/**
 * Sede.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    members: {
      collection: 'User',
      via: 'sede', //project
      through: 'usersede' //userproject
    },
    inventory: {
      collection: 'Inventory',
      via: 'sede', //project
      through: 'inventorysede' //userproject
    }
  },
  seedData:[
    {
      name: 'Caracas',
      members: [1]
    },
    {
      name: 'Paraparal',
      members: [2]
    },
    {
      name: 'Apamates Nepe',
      members: [3]
    },
    {
      name: 'Capuchino',
      members: [4]
    }
  ]
};
