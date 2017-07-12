/**
 * Inventory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    observations: {
      type: 'text'
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

    ]
};
