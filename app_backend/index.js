let app = require('./config/express.js')();
let port = process.env.POST || 3000;
const pool = require('./config/sql/postgres.js');

app.get('/farmer/:searchable', (req, res) => {

    let searchable = req.params.searchable;

    let query = `
        SELECT 
            f.name, f.document as document_number, d.type as document_type,
            a.street, a.address, a.state, a.country
        FROM farmers f
        INNER JOIN addresses a on (f.address_id = a.id)
        INNER JOIN documents d on (f.document = d.number)
        WHERE f.document = '${searchable}'
        OR UPPER(f.name) LIKE '%${searchable.toUpperCase()}%'
    `;

    pool.query(query, (error, results) => {
        if(error) throw error;

        res.json(results.rows);
    })
});

app.listen(port, () => console.log(`Server running on port 3000`));
