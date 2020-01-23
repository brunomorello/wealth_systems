class Farmer {

    constructor(id, name, address, document) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._document = document;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get address() {
        return this._address;
    }

    get document() {
        return this._document;
    }
}

module.exports = new Farmer;