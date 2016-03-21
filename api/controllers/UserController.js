var bcrypt = require('bcrypt');

module.exports = {

    login: function (req, res) {

        var email = req.body.email,
            password = req.body.password;

        if (!(email && password)) {
            return res.badRequest({ responseMsg: 'Email and password fields are required' });
        }
        User.findOne({ email: email }).exec(function (err, user) {
            if (err) return res.serverError(err);
            if (!user) {
                return res.badRequest({ responseMsg: 'User not found' });
            }
            User.comparePassword(password, user, function (err, valid) {
                if (err) return res.serverError(err);
                if (!valid) return res.badRequest({ responseMsg: 'Email and password don\'t match' });
                else
                    return res.ok({
                        user: user,
                        token: jwToken.issue({ id: user.id })
                    });

            });
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
    }
};
