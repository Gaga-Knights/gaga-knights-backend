const middleware = require('../middleware')

const { User } = require('../models')

const Login = async (req, res) => {
  try {
      const user = await User.findone({
          where: { email: req.body.email },
          raw: true
      })
      if (
          user &&
          middleware.comparePassword(user.passwordDigest, req.body.password)
      ) {
          let payload = {
              id: user.id,
              email: user.email
          }
          let token = middleware.createToken(payload)
          return res.send({ user: payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
      const { username, email, password} = req.body
      let passwordDigest = await middleware.hashPassword(password)
      const user = await User.create({ username, email, passwordDigest })
      res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}