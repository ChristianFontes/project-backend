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
      name: 'American Provider'
    },
    {
      name: 'HelpDesk C.A'
    },
    {
      name: 'Security Software'
    }
  ]
};
