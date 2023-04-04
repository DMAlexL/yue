const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/query/:id', function (req, res) {
  res.send({
    data: [
      { id: 1, value: 2 },
      { id: 3, value: 6 },
      { id: 5, value: 10 },
      { id: 7, value: 14 },
      { id: 9, value: 18 },
      { id: 11, value: 22 },
      { id: 13, value: 26 },
      { id: 15, value: 30 },
      { id: 17, value: 34 },
      { id: 19, value: 38 },
      { id: 21, value: 42 },
      { id: 23, value: 46 },
      { id: 25, value: 50 },
      { id: 27, value: 54 },
      { id: 29, value: 58 },
      { id: 31, value: 62 },
      { id: 33, value: 66 },
      { id: 35, value: 70 },
      { id: 37, value: 74 },
      { id: 39, value: 78 },
      { id: 41, value: 82 },
      { id: 43, value: 86 },
      { id: 45, value: 90 },
      { id: 47, value: 94 },
      { id: 49, value: 98 },
      { id: 51, value: 102 },
      { id: 53, value: 106 },
      { id: 55, value: 110 },
      { id: 57, value: 114 },
    ],
    result: true,
  });
});

router.put('/about', function (req, res) {
  res.send('About birds');
});

router.post('/about', function (req, res) {
  res.send('About birds');
});
router.delete('/about', function (req, res) {
  res.send('About birds');
});

export default router;
