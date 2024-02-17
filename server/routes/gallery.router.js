const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  let sqlText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE id=$1;`;

    pool.query(sqlText, [req.params.id])
    .then((result) => {
        console.log(`item successfully UPDATED: ${sqlText}`);
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making PUT query`, err);
        res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  let queryText = `SELECT * from "gallery" ORDER BY "id"`;

  pool.query(queryText)
  .then((result) => {
      console.log(`GET database query successful: ${queryText}`)
      res.send(result.rows);
  }).catch((err) => {
      console.log(`Error making GET query,`, err);
      res.sendStatus(500);
  })
});

module.exports = router;
