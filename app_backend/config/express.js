let express = require('express');
let bodyParser = require('body-parser');

module.exports = () => {
    let app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    return app;
}

