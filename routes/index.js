const express = require('express');
const router = express.Router();
const pool = require('../db')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows)
});


router.get('/ping', async (req, res, next) => {
  const [result] = await pool.query('SELECT "Hello world" as result')
  res.json(result[0])
})


router.get('/create', async (req, res, next) => {
  const result = await pool.query('INSERT INTO users(name) VALUES("Salem")')
  res.json(result[0])
})



module.exports = router;
