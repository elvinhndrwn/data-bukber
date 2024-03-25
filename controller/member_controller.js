const { v4: uuidv4 } = require('uuid');
const db = require('../db_config');
const req = require('express/lib/request');

module.exports = {
    all: async (req, res) => {
        try{
            const query = 'SELECT * FROM member';
            const members = await db.query(query); 
            // res.json(result.rows);

            res.render('index', {
                members : members.rows
            });

        }catch (error) {
            console.error('Query error', error.message);
            res.status(500).send('Terjadi kesalahan saat mengambil data dari database.');
        }
    },

    save: async (req, res) => {
        try{
            const { name } = req.body;
            const query = 'INSERT INTO member (name) VALUES ($1)';
            console.log("Query:", query);
            const newMember = await db.query(query, [name]);

            res.redirect('/')

        }catch (error) {
            console.error('Query error', error.message);
            res.status(500).send('Terjadi kesalahan saat menyimpan data ke database.');
        }
    },

    delete: async (req, res) => {
        try{
            const { id } = req.params;
            const query = 'DELETE FROM member WHERE id = $1 ';
            await db.query(query, [id]);

            res.redirect('/')

        }catch (error) {
            console.error('Query error', error.message);
            res.status(500).send('Terjadi kesalahan saat menghapus data di database.');
        }
    }
}