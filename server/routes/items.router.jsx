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

router.post("/", (req, res) => {
  const newItem = req.body 
  const sqlText = ` 
        INSERT INTO items
            (name, quantity, unit)
            VALUES
            ($1, $2, $3);
    ` 
    const sqlValues = [
      newItem.name,
      newItem.quantity,
      newItem.unit
    ]
    pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      console.log('item added to database: ', newItem)
      res.sendStatus(201)
    })
    .catch((error) => {
      console.log('error making database query: ', error)
      res.sendStatus(500)
    })
})




module.exports = router;