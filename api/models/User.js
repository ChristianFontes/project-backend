var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	name:{
      type: 'string',
      required: true
    },
    lastName:{
      type: 'string',
      required: true
    },
    userName: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
  	  type: 'email',
      required: true,
      unique: true
  	},
  	password: {
      type: 'string',
      required: true
    },
  	avatar: {
      type: 'string'
    },
    typeMember: {
      type: 'string',
      required: true
    },
    departament: {
      collection: 'departament', //project
      via: 'member',
      through: 'userdepartament', //userproject
      dominant: true
    },
    sede: {
      collection: 'sede', //project
      via: 'member',
      through: 'usersede', //userproject
      dominant: true
    },
    tickets: {
      collection: 'Ticket',
      via: 'user', //project
      through: 'ticketuser' //userproject
    },
    products: {
      collection: 'Product',
      via: 'user', //project
      through: 'productuser' //userproject
    },
    inventories: {
      collection: 'Inventory',
      via: 'user', //project
      through: 'inventoryuser' //userproject
    },
    incidences: {
      collection: 'Incidence',
      via: 'user', //project
      through: 'incidenceuser' //userproject
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  // beforeUpdate: function(values, next) {
  //   if (values.password && values.password.substring(0,7) !== '$2a$10$') {
  //     bcrypt.genSalt(10, function (err, salt) {
  //       if(err) return next(err);
  //       bcrypt.hash(values.password, salt, function (err, hash) {
  //         if(err) return next(err);
  //         values.password = hash;
  //         next();
  //       })
  //     })
  //   }else {
  //     next();
  //   }
  // },
  //
  // // Encriptar Password antes de Guardar en la BD.
  // beforeCreate : function (values, next) {
  //   if (values.password && values.password.substring(0,7) !== '$2a$10$') {
  //     bcrypt.genSalt(10, function (err, salt) {
  //       if(err) return next(err);
  //       bcrypt.hash(values.password, salt, function (err, hash) {
  //         if(err) return next(err);
  //         values.password = hash;
  //         next();
  //       })
  //     })
  //   }else {
  //     next();
  //   }
  // },
  //
  // comparePassword: function (password, user, cb) {
  //   bcrypt.compare(password, user.password, function (err, match) {
  //     if (err) cb(err);
  //     if (match) {
  //         cb(null, true);
  //     } else {
  //         cb(err);
  //     }
  //   })
  // },
  seedData:[
      {
        name: 'Daniel',
        lastName: 'Ortiz',
        userName: 'DanielOrtiz',
        email:'d.ortiz.lira@gmail.com',
        password:'qqqqqq',
        avatar: 'Daniel',
        typeMember: 'Gestor'
      },
      {
        name: 'Christian',
        lastName: 'Fontes',
        userName: 'ChristianFontes82',
        email:'christianfontes82@gmail.com',
        password:'qqqqqq',
        avatar: 'Daniel',
        typeMember: 'Gestor'
      },
      {
        name: 'Maria Elizabeth',
        lastName: 'Taylor',
        userName: 'Maria85',
        email:'mariaejemplo85@gmail.com',
        password:'qqqqqq',
        avatar: 'Daniel',
        typeMember: 'Gestor'
      },
      {
        name: 'Manuel',
        lastName: 'Rodriguez',
        userName: 'manuelrodri85',
        email:'manuelrodri85@gmail.com',
        password:'qqqqqq',
        avatar: 'Daniel',
        typeMember: 'Empleado'
      }
    ]
};
