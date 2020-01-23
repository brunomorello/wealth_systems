class Document {

    constructor(number, type) {
        this.number = number;
        this.type = type;
    }

    get number() {
        return this.number;
    }

    get type() {
        return this.type;
    }

}

module.exports = Document;