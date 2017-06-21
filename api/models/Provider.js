/**
 * Provider.js
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
    products: {
      collection: 'Product',
      via: 'provider', //project
      through: 'productprovider' //userproject
    }
  },
  seedData:[
    {
      name: 'J&A System C.A'
    },
    {
      name: 'Gold Data C.A'
    },
    {
      name: 'Caracas Red C.A'
    },
    {
      name: 'Caracas Hosting C.A'
    },
    {
      name: 'Herman Soluciones C.A'
    },
    {
      name: '3D Online Soluciones C.A'
    }
  ]
};
