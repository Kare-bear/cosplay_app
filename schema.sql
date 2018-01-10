CREATE TABLE users (
    id serial primary key,
    name varchar(50),
    username varchar(50),
    age integer,
    bio varchar(500),
    image_url text,
    authid serial);
