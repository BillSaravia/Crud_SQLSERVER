 -- CREATE DATABASE preuba;

use preuba;

-- DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id int identity(1, 1) primary key,
    name varchar(255) not null,
    price decimal(10, 2),
    quantity int,
    description text
);

-- EXEC sp_columns 'products';

INSERT INTO products (name, price, quantity, description) VALUES ('tablet', 'gaming', 10, 100)


-- SELECT TOP(500) * FROM [preuba].[dbo].[Products];

-- INSERT DATA
-- INSERT INTO [preuba].[dbo].[Products] (name) VALUES('product2');

-- GET THE LAST INSERT ID
-- SELECT SCOPE_IDENTITY()

SELECT COUNT(*) FROM preuba.dbo.Products;


 SELECT USER_NAME();