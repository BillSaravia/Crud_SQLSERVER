import {getConnection} from '../database/connection.js';
import sql from 'mssql';

export const getProducts = async (req, res) => {
    const pool = await getConnection()
    const result =  await pool.request().query('Select * from products')
    res.json(result.recordset)
};

export const getProduct = async (req, res) => {
    console.log(req.params.id)

    const pool = await getConnection()
    const result = await pool
        .request()
        .input('id', sql.Int, req.params.id)
        .query('Select * from products where id = @id')
    
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "product not found"});
    }
    
    return res.json(result.recordset[0]);
};

export const  createProduct =  async (req, res) => {
    console.log(req.body)

    const pool = await getConnection()
    const result = await pool.request()
        .input('name', sql.VarChar, req.body.name) 
        .input('description', sql.Text, req.body.description)
        .input('quantity', sql.Int, req.body.quantity)
        .input('price', sql.Decimal, req.body.price)  
    .query("Insert into products (name, description, quantity, price) Values(@name, @description, @quantity, @price); Select scope_identity() As id;" );

    console.log(result);

    res.json({
        id: result.recordset[0].id,
        name: req.body.name, 
        description: req.body.description, 
        quantity: req.body.quantity, price: 
        req.body.price
    });
};

export const updateProduct = async (req, res) => {
    const pool = await getConnection()
    const result = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .input('name', sql.VarChar, req.body.name) 
        .input('description', sql.Text, req.body.description)
        .input('quantity', sql.Int, req.body.quantity)
        .input('price', sql.Decimal, req.body.price) 
    .query(
        "update products set name = @name, description = @description, quantity = @quantity, price = @price where id = @id");

    
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({ message: "Product not found"});
    }
    res.json({
        id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
    });
};

export const deleteProduct = async (req, res) => {

    const pool = await getConnection()
    const result = await pool.request()
        .input("id", sql.Int, req.params.id)
        .query("delete from products where id = @id");

    console.log(result)

    if (result.rowsAffected[0] === 0){
        return res.status(404).json({message: "product not found"});
    }
    
    return res.json({ message: "product deleted"});



}