const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'roundhouse.proxy.rlwy.net',
  database: 'railway',
  password: 'XVUVJrhyNqDlyoNOCRxFzXQwNgNlwZiB',
  port: 45499,
});


module.exports = pool;
