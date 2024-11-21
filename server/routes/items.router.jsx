const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET router to return latest items in db
router.get("/", (req, res) => {

  // Set SQL statement
  const statement = `SELECT * FROM "items";`;

  // Send statement to db and send back items in db
  pool.query(statement)
    .then((response) => {
      res.send(response.rows);
  })
    .catch((error) => {
      console.log('Error with /api/items GET request:', error);
      res.sendStatus(500);
  });

})

module.exports = router;