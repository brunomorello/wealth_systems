let app = require('./config/express.js')();
let port = process.env.POST || 3000;
const pool = require('./config/sql/postgres.js');
const Farmer = require('./model/Farmer');
const Address = require('./model/Address');
const Document = require('./model/Document');
const sgMail = require('@sendgrid/mail');


// tests
const nodemailer = require('nodemailer');

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

        let farmersList = [];
            
        results.rows.forEach(row => {

            var document = new Document(row.document_number, row.document_type);
            var address = new Address(row.address_id, row.street, row.state, row.address, row.country);
            var farmer = new Farmer(row.farmer_id, row.name, address, document);

            farmersList.push(farmer);

        });

        res.json(farmersList);
    })
});

app.post('/sendmail', (req, res) => {

    sgMail.setApiKey('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');

    const msg = {
        to: 'brunomorello7@gmail.com',
        from: 'brunomorello7@gmail.com',
        subject: 'Testing BMO NodeJS',
        text: 'and easy to do anywhere, even with Node.js'
      };
    sgMail.send(msg)
        .then(resp => res.json(resp))
        .catch(error => res.json(error));

});

app.post('/nodemailer', (req, res) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'bmo.fullstack@gmail.com',
            pass: 'Dqm72vnc'
        }
    });

    let info = transporter.sendMail({
        from: 'bmo.fullstack@gmail.com',
        to: 'bmo.fullstack@gmail.com',
        subject: 'testing nodemailer',
        text: req.body.message
    });

    info
        .then(resp => {
            res.status(200).send(resp);
        })
        .catch(error => {
            res.status(500).send(error);
        })

    // console.log(info);

    // if (info) {
    //     res.status(200).send({
    //         msg: 'Email Sent'
    //     });
    // } else {
    //     res.status(500).send({
    //         msg: 'Error to Send Email'
    //     });
    // }

});

app.listen(port, () => console.log(`Server running on port 3000`));
