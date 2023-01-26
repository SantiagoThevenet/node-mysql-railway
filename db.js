const { createPool } = require('mysql2/promise')
const {host,user,password,port,database} = require('./db/config')
const pool = createPool({
    host,
    user,
    password,
    port,
    database
})

module.exports = pool