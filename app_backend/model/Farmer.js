class Farmer {

    id = '';
    name = '';
    address = '';
    document = '';

    constructor(id, name, address, document) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.document = document;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get address() {
        return this.address;
    }

    get document() {
        return this.document;
    }
    
}

module.exports = Farmer;