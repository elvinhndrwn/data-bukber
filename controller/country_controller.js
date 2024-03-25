const { v4: uuidv4 } = require('uuid');
const db = require('../db_config');
const req = require('express/lib/request');

module.exports = {
    all: async (req, res) => {
        try{
            const query = 'SELECT * FROM country';
            const result = await db.query(query); 
            res.json(result.rows); // Mengirimkan hasil query sebagai respon JSON
        }catch (error) {
            console.error('Query error', error.message);
            res.status(500).send('Terjadi kesalahan saat mengambil data dari database.');
        }
    },

    getByCode: async (req, res) => {
        try{
            const countryCode = req.params.code.toUpperCase();
            const query = 'SELECT * FROM country c WHERE c.code = $1';
            const result = await db.query(query, [countryCode]);
            res.json(result.rows);
        }catch(error){
            console.error('Query error', error.message);
            res.status(500).send('Terjadi kesalahan saat mengambil data dari database.');
        }
    }
}