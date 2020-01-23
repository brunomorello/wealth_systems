class Document {

    constructor(number, type) {
        this._number = number;
        this._type = type;
    }

    get number() {
        return this._number;
    }

    get type() {
        return this._type;
    }

}

module.exports = new Document;