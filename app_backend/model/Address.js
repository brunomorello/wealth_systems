class Address {

    constructor(id, street, state, address, country) {
        this._id = id;
        this._street = street;
        this._state = state;
        this._address = address;
        this._country = country;
    }

    get id() {
        return this._id;
    }

    get street() {
        return this._street;
    }

    get state() {
        return this._state;
    }

    get address() {
        return this._address;
    }

    get country() {
        return this._country;
    }

}

module.exports = new Address;