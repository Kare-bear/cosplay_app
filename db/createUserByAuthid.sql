INSERT INTO users (authid, name, gender, locale) VALUES (${id}, ${name}, ${gender}, ${locale}) RETURNING *;
