const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let friends = [
  {
    id: 1,
    name: 'Saradomin',
    role: 'Saradomin is the god of order and wisdom, and by many of his followers considered the god of good.',
    color: 'Blue'
  },
  {
    id: 2,
    name: 'Guthix',
    role: 'Guthix is the god of balance and nature, rumoured to be the most powerful god known.',
    color: 'Green'
  },
  {
    id: 3,
    name: 'Zamorak',
    role: 'Zamorak is the god of chaos.',
    color: 'Red'
  },
  {
    id: 4,
    name: 'Armadyl',
    role: 'Armadyl is the god of justice and law, the patron god of the aviantese and the namesake of the legendary Staff of Armadyl.',
    color: 'White'
  },
  {
    id: 5,
    name: 'Bandos',
    role: 'Bandos is the god of war, and known to most of his followers as the Big High War God. ',
    color: 'Brown'
  },
  {
    id: 6,
    name: 'Zaros',
    role: 'Zaros is an almost forgotten god associated with fate, control and darkness.',
    color: 'purple'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'ryan' && password === 'dill') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
