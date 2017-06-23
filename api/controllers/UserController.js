var bcrypt = require('bcrypt');

module.exports = {

    login: function (req, res) {
        var userName = req.body.userName,
            password = req.body.password;
        if (!(userName && password)) {
            return res.badRequest({ error: 'Nombre de Usuario y Contraseña son requeridas' });
        }
        User.findOne({ userName: userName }).exec(function (err, user) {
            if (err) return res.serverError(err);
            if (!user) {
                return res.badRequest({ error: 'Nombre de usuario no encontrado' });
            }
            if (user.password == password) {
              return res.ok({
                  user: user,
                  token: jwToken.issue({ id: user.id })
              });
            }else {
              res.badRequest({ error: 'Nombre de usuario y Contraseña no coinciden' });
            }
            // User.comparePassword(password, user, function (err, valid) {
            //     if (err) return res.serverError(err);
            //     if (!valid) return res.badRequest({ error: 'Nombre de usuario y Contraseña no coinciden' });
            //     else
            //         return res.ok({
            //             user: user,
            //             token: jwToken.issue({ id: user.id })
            //         });
            //
            // });
        });
    },

    create: function (req, res) {
        var userObj = req.allParams();
        User.create(userObj, function (err, user) {
            if (err) {
                return res.json(400, { err: err });
            }
            if (user) {
                res.json(200, { user: user, token: jwToken.issue({ id: user.id }) });
            }
        })
    },

    update: function (req, res) {
        var userObj = req.allParams();
        if (!req.body.password || userObj.password == '') {
          delete userObj.password;
          //userObj['password'] = user.password;
          User.update(userObj.id, userObj).exec(function afterwards(err, updated){
            if (err) {
              return res.json(400, { err: err });
            }
            if (updated) {
                res.json(200, { user: updated});
            }
          });
        }else {
          User.update(userObj.id, userObj).exec(function afterwards(err, updated){
            if (err) {
              return res.json(400, { err: err });
            }
            if (updated) {
                res.json(200, { user: updated});
            }
          });
        }
    },
};
