const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:name', function (req, res, next) {
  const name = req.params.name || 15350;
  fs.readFile(`${path.resolve()}/txt/${name}.txt`, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

export default router;
