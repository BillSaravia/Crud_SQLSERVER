CREATE TABLE products (
    id int identity(1, 1) primary key,
    name varchar(255) not null,
    price decimal(10, 2),
    quantity int,
    description text
);

INSERT INTO products (name, price, quantity, description) VALUES ('tablet', 10, 10, 'dispositivo movil')