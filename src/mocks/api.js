const express = require('express')
const Data = require('./data')
const cors = require('cors')
const credentials = require('./credentials');

const api = express()

api.use(express.json())

api.use(cors())

const authenticator = (req, res, next) => {
  const { authorization } = req.headers;
  const { token } = credentials;

  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User not currently logged in.' });
  }
}

//Get All Articles Endpoint
api.post('/api/login', (req, res) => {
  const {username, password, role, token}  = credentials;

  if (username === req.body.username && password === req.body.password) {
    res.json({
      username,
      role,
      token
    });
  } else {
    res.status(403).json({ error: 'Incorrect username / password combination.' });
  }

})

api.post('/api/logout',authenticator,  (req, res) => {
  const {username, role, token}  = credentials;
  res.json({
    username,
    role,
    token
  })
})

api.get('/api/friends', authenticator,(req, res) => {
  res.json(Data.getAll())
})

//Get Post Endpoint
api.get('/api/friends/:id', authenticator, (req, res) => {
  res.json(Data.getById(req.params.id))
})

//Create Post Endpoint
api.post('/api/friends', authenticator, (req, res) => {
  console.log(req.body);
  res.json(Data.create(req.body))
})

api.listen(9000, () => {
  console.log('listening on 9000')
})