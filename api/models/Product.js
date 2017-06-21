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
      required: true
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
    {
      name: 'Laptop HP',
      serial: 852963,
      model: 'HP 15',
      brand: 'HP',
      user: 2,
      provider: 3
    },
    {
      name: 'Pantalla Samsung',
      serial: 962925,
      model: 'SyncMaster 732n',
      brand: 'Samsung',
      user: 2,
      provider: 1
    },
    {
      name: 'Desktop Dell',
      serial: 105937,
      model: 'Dell 358n',
      brand: 'Dell',
      user: 2,
      provider: 1
    }
  ]
};
