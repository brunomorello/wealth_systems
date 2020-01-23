const Pool = require('pg').Pool;

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PORT,
} = process.env;

module.exports = new Pool({
    user: POSTGRES_USER,
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    port: POSTGRES_PORT
});