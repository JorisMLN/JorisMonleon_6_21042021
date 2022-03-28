/* - - - - - USER CONTROLLERS - - - - - */
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  console.log(req.body.login);
  console.log(req.body.password);

  let login = req.body.login;
  const token = jwt.sign(
    { userId: login },
    'RANDOM_TOKEN_SECRET',
    { expiresIn: '12h' }
  )

  return res.status(200).json(token);
};