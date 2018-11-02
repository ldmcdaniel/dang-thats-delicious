const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It woks!');
  res.render('hello', {
    name: 'Lucas',
    dog: req.query.dog,
  });
});

module.exports = router;
