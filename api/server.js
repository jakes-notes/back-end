const express = require('express');
//const helmet = require('helmet');

//const db = require('../db/notes.js');

const server = express();

//server.use(helmet());
server.use(express.json());


//   // LOGIN
  
//   server.post('/api/notes/login', (req, res) => {
//     const creds = req.body;
  
//     db('users')
//       .where({ username: creds.username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(creds.password, user.password)) {
//           const token = generateToken(user);
//           res.status(200).json({ message: 'Welcome!', token });
//         } else {
//           res.status(401).json({ message: 'Get Out!!' });
//         }
//       })
//       .catch(err => res.json(err));
//   });
  
//   function protected(req, res, next) {
//     const token = req.headers.authorization;
  
//     if (token) { // is valid
//       jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
//         if (err) { // is invalid
//           res.status(401).json({ message: 'invalid token' });
//         } else { // token is good
//           req.decodedToken = decodedToken;
//           next();
//         }
//       });
//     } else { //bounced
//       res.status(401).json({ message: 'no token provided' });
//     }
//   }
  
//   //protect this route! Authenticate users only!
//   server.get('/api/notes/users', protected, checkRole('sales'), (req, res) => {
//     db('users')
//       .select('id', 'username', 'password')
//       .then(users => {
//         res.json(users);
//       })
//       .catch(err => res.send(err));
//   });
  

  
//   function checkRole(role) {
//     return function(req, res, next) {
//       if (req.decodedToken && req.decodedToken.roles.includes(role)) {
//         next();
//       } else {
//         res.status(403).json({ message: 'you have no access to this resource' });
//       }
//     };
//   }
  
// // REGISTER

//   server.post('/api/notes/register', (req, res) => {
//     const creds = req.body;
//     const hash = bcrypt.hashSync(creds.password, 4); 
//     creds.password = hash; 
//     db('users')
//       .insert(creds)
//       .then(ids => {
//         res.status(201).json(ids);
//       })
//       .catch(err => json(err));
//   });

  module.exports = server;