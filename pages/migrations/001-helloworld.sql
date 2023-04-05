-- UP

CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerID INTEGER REFERENCES Person(id)
);



INSERT INTO Person (name, email) values('bruno', 'R8@asd.com');
INSERT INTO Vehicle (brand, model, ownerID) values('audi', 'R8', 1);


-- DOWN
DROP TABLE Person;
DROP TABLE Vehicle;