const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get("/", (req, res) => {

  const statement = `SELECT * FROM "items";`;
  pool.query(statement)
    .then((response) => {
      console.log('DB response:', response.rows);
      res.send(response.rows);
  })
    .catch((error) => {
      console.log('GET request error:', error);
      res.sendStatus(500);
  });

})

router.delete("/", (req, res) => {

  const statement = ``;
  pool.query(statement)
    .then((response) => {
      
  })
    .catch((error) => {
      console.log('DELETE request error:', error);
      res.sendStatus(500);
  });

})

module.exports = router;