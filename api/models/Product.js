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
      name: 'Producto 1',
      serial: 852963,
      model: 'Modelo 1',
      brand: 'Ethereum',
      user: 1,
      provider: 3
    },
    {
      name: 'Producto 2',
      serial: 852985,
      model: 'Modelo 2',
      brand: 'BTC',
      user: 3,
      provider: 1
    },
    {
      name: 'Producto 3',
      serial: 852920,
      user: 3,
      model: 'Modelo 3',
      brand: 'Ethereum Classic',
      provider: 2
    }
  ]
};
