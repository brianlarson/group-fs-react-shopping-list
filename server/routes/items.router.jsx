const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET router to return latest items in db
router.get("/", (req, res) => {

  // Set SELECT SQL statement
  const statement = `
    SELECT * FROM "items" ORDER BY "name" ASC;
  `;

  // Send statement to db and send back items in db
  pool.query(statement)
    .then((response) => {
      console.log('response.rows:', response.rows);
      res.send(response.rows);
  })
    .catch((error) => {
      console.log('Error with /api/items GET request:', error);
      res.sendStatus(500);
  });

});

// POST router to add new items to db
router.post("/", (req, res) => {

  const item = req.body;
  console.log('req.body as `item` is:', item);

  // Set INSERT SQL statement
  const statement = `
    INSERT INTO "items" ("name", "quantity", "unit")
    VALUES ('${item.name}', ${item.quantity}, '${item.unit}');
  `;
  
  console.log('SQL statement for POST request:', statement);

  // Send statement to db to add item and send back updated items
  pool.query(statement)
    .then((response) => {
      console.log('response.data in POST route is:', response.data);
      res.sendStatus(201);
  })
    .catch((error) => {
      console.log('Error with /api/items POST request:', error);
      res.sendStatus(500);
  });

});

module.exports = router;
