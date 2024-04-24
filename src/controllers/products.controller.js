import {getConnection} from '../database/connection.js'


export const getProducts = async (req, res) => {
    const pool = await getConnection()
    const result =  await pool.request().query('Select * from products')
    res.json(result.recordset)
};

export const getProduct = (req, res) => {
    res.send('obteniendo un solo producto')
}

export const  createProduct =  (req, res) => {
    res.send('creando un producto')
}

export const updateProduct = (req, res) => {
    res.send('actualiza un producto')
}

export const deleteProduct = (req, res) => {
    res.send('eliminando un producto un producto');
}