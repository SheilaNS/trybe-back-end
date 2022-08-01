
CREATE DATABASE IF NOT EXISTS books_api;

USE books_api;

CREATE TABLE IF NOT EXISTS  books
(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	price DECIMAL(10, 2),
	author VARCHAR(100) NOT NULL,
	isbn VARCHAR(100),
	PRIMARY KEY(id)
);

INSERT INTO books (title, price, author, isbn)
VALUES ('Código Limpo', 125.9, 'Robert C Martin', '8576082675'),
	('Refatoração', 129.9, 'Martin Fowler', '8575227246'),
	('Padrões de Projetos', 141.98, 'Erich Gamma', '8573076100');