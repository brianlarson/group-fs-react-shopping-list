-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity NUMERIC NOT NULL,
	unit VARCHAR(20) NOT NULL,
	
);

INSERT INTO items (name, quantity, unit)
VALUES ('Apples', '5', 'lbs'), 
('Bread', '1', 'loaf'), 
('Milk', '1', 'gallon'),
('Sliced Almonds', '2', 'cups'),
('Bananas', '1', 'Bunch');