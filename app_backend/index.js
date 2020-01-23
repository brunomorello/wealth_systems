let app = require('./config/express.js')();
let port = process.env.POST || 3000;
const pool = require('./config/sql/postgres.js');
const Farmer = require('./model/Farmer');
const Address = require('./model/Address');
const Document = require('./model/Document');

app.get('/farmer/:searchable', (req, res) => {

    let searchable = req.params.searchable;

    let query = `
        SELECT 
            f.id as farmer_id, f.name, f.document as document_number, d.type as document_type,
            a.street, a.address, a.state, a.country, a.id as address_id
        FROM farmers f
        INNER JOIN addresses a on (f.address_id = a.id)
        INNER JOIN documents d on (f.document = d.number)
        WHERE f.document = '${searchable}'
        OR UPPER(f.name) LIKE '%${searchable.toUpperCase()}%'
    `;

    pool.query(query, (error, results) => {
        
        if(error) throw error;

        let farmers = {
            farmersList: []
        };
            
        results.rows.forEach(row => {

            var document = new Document(row.document_number, row.document_type);
            var address = new Address(row.address_id, row.street, row.state, row.address, row.country);
            var farmer = new Farmer(row.farmer_id, row.name, address, document);

            farmers.farmersList.push(farmer);

        });

        res.json(farmers);
    })
});

app.listen(port, () => console.log(`Server running on port 3000`));
