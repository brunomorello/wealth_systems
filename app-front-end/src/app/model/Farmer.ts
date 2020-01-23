import { Address } from './Address';
import { Document } from './Document';

export class Farmer {
    id: string;
    document: Document;
    name: string;
    address: Address;

    constructor(id: string, name: string, document: Document, address: Address) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.address = address;
    }
}