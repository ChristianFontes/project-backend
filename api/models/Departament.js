/**
 * Departament.js
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
      via: 'department', //project
      through: 'userdepartament' //userproject
    }
  },
  seedData:[
    {
      name: 'Sistemas',
      members: [1]
    },
    {
      name: 'Administracion',
      members: [2]
    },
    {
      name: 'Desarrollo',
      members: [3]
    },
    {
      name: 'Finanzas',
      members: [4]
    },
    {
      name: 'Compras'
    },
    {
      name: 'Contraloria'
    },
    {
      name: 'Marketing'
    },
    {
      name: 'Diseño'
    },
    {
      name: 'Producción'
    },
    {
      name: 'Operaciones'
    },
    {
      name: 'Gestion Humana'
    },
    {
      name: 'Gerencia'
    },
    {
      name: 'Presidencia'
    }
  ]
};
