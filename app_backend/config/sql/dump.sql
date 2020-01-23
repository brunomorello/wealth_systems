CREATE TABLE documents (
    number varchar(50) PRIMARY KEY,
    type varchar(10)
);

INSERT INTO documents
VALUES('111.111.111-00', 'cpf');

INSERT INTO documents
VALUES('222.222.222-04', 'cpf');

INSERT INTO documents
VALUES('475.122.829-11', 'cpf');

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    street varchar(255),
    state varchar(100),
    address varchar(255),
    country varchar(100)
);

INSERT INTO addresses(street, state, address, country)
VALUES('Rua 1', 'São Paulo', 'S/N', 'Brasil');

INSERT INTO addresses(street, state, address, country)
VALUES('Rua 2', 'São Paulo', 'S/N', 'Brasil');

INSERT INTO addresses(street, state, address, country)
VALUES('Rua 3', 'São Paulo', 'S/N', 'Brasil');

CREATE TABLE farmers (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    address_id INTEGER REFERENCES addresses(id),
    document VARCHAR REFERENCES documents(number)
);

INSERT INTO farmers(name, address_id, document)
VALUES('Bruno Moreno', 1, '111.111.111-00');

INSERT INTO farmers(name, address_id, document)
VALUES('Fulano da Silva', 2, '222.222.222-04');

INSERT INTO farmers(name, address_id, document)
VALUES('Bruno Moreno', 3, '475.122.829-11');