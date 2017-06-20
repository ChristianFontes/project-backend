/**
 * Inventory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    observations: {
      type: 'text',
      required: true
    },
    quantity: {
      type: 'text',
      required: true
    },
    user: {
      collection: 'User',
      via: 'member',
      through: 'inventoryuser',
      dominant: true
    },
    sede: {
      collection: 'sede',
      via: 'member',
      through: 'inventorysede',
      dominant: true
    },
    products: {
      collection: 'product',
      via: 'member',
      through: 'inventoryproduct',
      dominant: true
    },
    incidences: {
      collection: 'incidence',
      via: 'inventory', //project
      through: 'incidenceinventory' //userproject
    }
  },
  seedData:[
      {
        observations: 'Varios products',
        user: [3],
        sede: [3],
        products: [1],
        quantity: 60
      }
    ]
};
