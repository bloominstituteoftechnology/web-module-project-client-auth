import { rest } from 'msw'
import Data from './data'
import credentials from './credentials';

function authenticator(req, resp) {
  const { authorization } = req.headers._headers;
  return (authorization === credentials.token)?resp():res( ctx.status(403),ctx.json({ error: 'User not currently logged in.' }));
}


function login(req, res, ctx) {
  const {username, password, role, token}  = credentials;

  if (username === req.body.username && password === req.body.password) {
    return res(ctx.json({
      username,
      role,
      token
    }))
  } else {
    return res( ctx.status(403),ctx.json({ error: 'Incorrect username / password combination.' }));
  }
}

function logout(req, res, ctx) {
  return (authenticator(req), ()=>{
    return res(
      ctx.status(200),
      ctx.json(Data.getAll())
    )
  })
}


function getAll(req, res, ctx) {
  return (authenticator(req, ()=>{
    return res(
      ctx.status(200),
      ctx.json(Data.getAll())
    );
  }))
}

function getById(req, res, ctx) {
  return (authenticator(req, ()=>{
    return res(
      ctx.status(200),
      ctx.json(Data.getById(req.params.id))
    )
  }))
}

function create(req, res, ctx) {
  return (authenticator(req, ()=> {
    return res(
      ctx.status(200),
      ctx.json(Data.create(req.body))
    )
  }))
}

function edit(req, res, ctx) {
  return (authenticator(req, ()=> {
    return res(
      ctx.status(200),
      ctx.json(Data.edit(req.params.id, req.body))
    )
  }))
}

function remove(req, res, ctx) {
  return (authenticator(req, ()=> {
    return res(
      ctx.status(200),
      ctx.json(Data.remove(req.params.id))
    )
  }))
}

export const handlers = [
  rest.post('http://localhost:9000/api/login', login),
  rest.post('http://localhost:9000/api/logout', logout),
  rest.get('http://localhost:9000/api/friends', getAll),
  rest.get('http://localhost:9000/api/friends/:id', getById),
  rest.post('http://localhost:9000/api/articles', create)
]
