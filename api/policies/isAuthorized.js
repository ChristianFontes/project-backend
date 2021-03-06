
module.exports = function (req, res, next) {

  var token;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length == 2) {
      var scheme = parts[0],
      credentials = parts[1];

      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }else{
        return res.badRequest({ responseMsg: 'Format is Authorization: Bearer [token]' });
      }
    } else {
      return res.badRequest({ responseMsg: 'Format is Authorization: Bearer [token]' });
    }
  } else if (req.param('token')) {
    token = req.param('token');
      // We delete the token from param to not mess with blueprints
  delete req.params.token;
  delete req.query.token;
  delete req.body.token;

} else {
  return res.badRequest({ responseMsg: 'No Authorization header was found' });
}
jwToken.verify(token, function(err, token) {
  if (err) return res.badRequest({ responseMsg: 'Invalid token!' });

  req.token = token;

  next();
});
}
