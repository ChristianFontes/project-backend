/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    serial: {
      type: 'string',
      required: true,
      unique: true
    },
    name: {
      type: 'string',
      required: true
    },
    model: {
      type: 'string',
      required: true
    },
    brand: {
      type: 'string',
      required: true
    },
    user: {
      collection: 'User', //project
      via: 'manager',
      through: 'productuser', //userproject
      dominant: true
    },
    provider: {
      collection: 'Provider', //project
      via: 'member',
      through: 'productprovider', //userproject
      dominant: true
    },
    inventory: {
      collection: 'Inventory',
      via: 'sede', //project
      through: 'inventoryproduct' //userproject
    }
  },
  seedData:[
  ]
};
