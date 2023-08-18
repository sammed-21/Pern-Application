const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "sammed",
    host: "localhost",
    port: 5432,
    database:"perntodo"
})

module.exports = pool;