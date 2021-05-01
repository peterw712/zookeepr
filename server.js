//start express.js
const express = require('express');
const app = express();
//for the route
const { animals } = require('./data/animals');
//add route that front-end can request data from
// app.get('/api/animals', (req, res) => {
//     res.send('Hello!');
//   });
app.get('/api/animals', (req, res) => {
    res.json(animals);
  });
//accessing query property on the req object
app.get('/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json(results);
  });
//make server listen
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
//npm start -> API server now on port 3001!
