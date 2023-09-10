const { Router } = require("express");
const router = Router();

router.get('/management', (req, res) => {
  // Set a cookie named 'status' with a value of true and a maxAge of 2 minutes (60000 milliseconds * 2)
  res.cookie('status', true, { maxAge: 60000 * 2 });

  res.send('Welcome to the management of the book store');
});

router.post('/management', (req, res) => {
  res.send('This is a post request');
});

router.put('/management', (req, res) => {
  res.send('This is a put request');
});

router.delete('/management', (req, res) => {
  res.send('This is a delete request');
});

router.patch('/management', (req, res) => {
  res.send('This is a patch request');
});

module.exports = router;
