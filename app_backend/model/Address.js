class Address {

    id = '';
    street = '';
    state = '';
    address = '';
    country = '';

    constructor(id, street, state, address, country) {
        this.id = id;
        this.street = street;
        this.state = state;
        this.address = address;
        this.country = country;
    }

    get id() {
        return this.id;
    }

    get street() {
        return this.street;
    }

    get state() {
        return this.state;
    }

    get address() {
        return this.address;
    }

    get country() {
        return this.country;
    }

}

module.exports = Address;